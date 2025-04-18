import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionMdPersonAddIcon],svg[ion-md-person-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M304 256c52.805 0 96-43.201 96-96s-43.195-96-96-96-96 43.201-96 96 43.195 96 96 96zm0 48c-63.598 0-192 32.402-192 96v48h384v-48c0-63.598-128.402-96-192-96z" fill="currentColor"></svg:path><svg:path d="M112 224v-64H80v64H16v32h64v64h32v-64h64v-32h-64z" fill="currentColor"></svg:path>`,
})
export class IonMdPersonAddIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
