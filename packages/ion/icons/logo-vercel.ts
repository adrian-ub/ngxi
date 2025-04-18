import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionLogoVercelIcon],svg[ion-logo-vercel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m256 48l240 416H16Z"></svg:path>`,
})
export class IonLogoVercelIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
