import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elDiggIcon],svg[el-digg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1123.2 375.086h-75.429V524.57H600.684V375.086h-76.8v229.027h76.8v441.601h223.544V826.285h76.8v219.43h145.371V604.114h76.801zM677.486 155.658v293.485H970.97V155.658zM1200 303.771v377.143h-76.8v440.229H523.886V680.914H300.343v145.37h71.314v75.43h76.8v219.429H75.429V901.714h76.8v144h219.429v-144H152.229v-75.43h71.314v-145.37H75.429v-76.801h371.657V303.771h153.6V78.857h447.086v224.914zm-828.343 0v-71.313h75.429v71.313zm-296.228 0v300.343H0V303.771zm76.8 0h-76.8v-71.313h76.8zm219.428-71.314H152.229v-76.8h219.429z"></svg:path>`,
})
export class ElDiggIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
