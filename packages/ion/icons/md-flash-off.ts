import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionMdFlashOffIcon],svg[ion-md-flash-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M459.9 435.5L76.1 52.5 51.9 76.6 160 184.3V272h64v192l72-144 139.9 139.5z" fill="currentColor"></svg:path><svg:path d="M352 208h-64l64-160H160v40.3l168 167.6z" fill="currentColor"></svg:path>`,
})
export class IonMdFlashOffIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
