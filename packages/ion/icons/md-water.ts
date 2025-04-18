import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionMdWaterIcon],svg[ion-md-water-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M380.5 163.3L256 32 131.5 163.3c-68.6 72.4-68.6 190 0 262.4C165.8 461.9 210.9 480 256 480s90.2-18.1 124.5-54.3c68.7-72.4 68.7-190 0-262.4z" fill="currentColor"></svg:path>`,
})
export class IonMdWaterIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
