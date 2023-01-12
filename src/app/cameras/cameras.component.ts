import { Component, OnInit } from '@angular/core';
import { UnicoCheckBuilder, SelfieCameraTypes, UnicoThemeBuilder, DocumentCameraTypes } from 'unico-webframe';

@Component({
  selector: 'app-cameras',
  templateUrl: './cameras.component.html',
  styleUrls: ['./cameras.component.css']
})
export class CamerasComponent implements OnInit {

  pathResources: string = '/assets/resources';
  pathModels: string = '/assets/models';
  pathUnicoConfigDefault: string = '/assets/unicoConfigDefault.json';
  pathUnicoConfigLiveness: string = '/assets/unicoConfigLiveness.json';

  unicoBuilder: any = null;
  unicoTheme: any = null;
  callback: any;


  constructor() { }

  ngOnInit(): void {
    this.unicoTheme = new UnicoThemeBuilder()
      .setColorSilhouetteSuccess("#0384fc")
      .setColorSilhouetteError("#D50000")
      .setColorSilhouetteNeutral("#fcfcfc")
      .setBackgroundColor("#dff1f5")
      .setColorText("#0384fc")
      .setBackgroundColorComponents("#0384fc")
      .setColorTextComponents("#dff1f5")
      .setBackgroundColorButtons("#0384fc")
      .setColorTextButtons("#dff1f5")
      .setBackgroundColorBoxMessage("#fff")
      .setColorTextBoxMessage("#000")
      .setHtmlPopupLoading(`<div style="position: absolute; top: 45%; right: 50%; transform: translate(50%, -50%); z-index: 10; text-align: center;">Carregandooooo...</div>`)
      .build();


    this.unicoBuilder = new UnicoCheckBuilder()
      .setTheme(this.unicoTheme)
      .setModelsPath(this.pathModels)
      .setResourceDirectory(this.pathResources)
      .build();

    this.callback = {
      on: {
        success: (obj: any) => {
          console.log('successMessage');
          console.log(obj);
        },
        error: (error: any) => {
          console.log('errorMessage');
          console.error(error)
        },
        support: (supportMessage: any) => {
          console.log('supportMessage');
          console.log(supportMessage);
        }
      }
    };
    
  }

  cameraManual(): void {
    const cameraPromised = this.unicoBuilder
      .prepareSelfieCamera(this.pathUnicoConfigDefault, SelfieCameraTypes.NORMAL)
      .catch(()=>console.error('Error initializing default camera'));
    
    cameraPromised.then((cameraOpener: { open: (arg0: object) => any; }) => cameraOpener.open(this.callback));
  }

  cameraSmart(): void {
    const cameraPromised = this.unicoBuilder
      .prepareSelfieCamera(this.pathUnicoConfigDefault, SelfieCameraTypes.SMART)
      .catch(()=>console.error('Error initializing smart camera'));
    
    cameraPromised.then((cameraOpener: { open: (arg0: object) => any; }) => cameraOpener.open(this.callback));
  }

  cameraLiveness(): void {
    const cameraPromised = this.unicoBuilder
      .prepareSelfieCamera(this.pathUnicoConfigLiveness, SelfieCameraTypes.SMART)
      .catch(()=>console.error('Error initializing liveness camera'));
    
    cameraPromised.then((cameraOpener: { open: (arg0: object) => any; }) => cameraOpener.open(this.callback));
  }

  cameraDocument(): void {
    const cameraPromised = this.unicoBuilder
      .prepareDocumentCamera(this.pathUnicoConfigDefault, DocumentCameraTypes.CNH)
      .catch(()=>console.error('Error initializing liveness camera'));
    
    cameraPromised.then((cameraOpener: { open: (arg0: object) => any; }) => cameraOpener.open(this.callback));
  }

  cameraDocumentCNHFront(): void {
    const cameraPromised = this.unicoBuilder
      .prepareDocumentCamera(this.pathUnicoConfigDefault, DocumentCameraTypes.CNH_FRENTE)
      .catch(()=>console.error('Error initializing liveness camera'));
    
    cameraPromised.then((cameraOpener: { open: (arg0: object) => any; }) => cameraOpener.open(this.callback));
  }

  cameraDocumentCNHBack(): void {
    const cameraPromised = this.unicoBuilder
      .prepareDocumentCamera(this.pathUnicoConfigDefault, DocumentCameraTypes.CNH_VERSO)
      .catch(()=>console.error('Error initializing liveness camera'));
    
    cameraPromised.then((cameraOpener: { open: (arg0: object) => any; }) => cameraOpener.open(this.callback));
  }
  
}