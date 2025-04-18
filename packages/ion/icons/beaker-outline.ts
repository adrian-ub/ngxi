import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionBeakerOutlineIcon],svg[ion-beaker-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M445.2 48.05L398 48H128c-54.3 0-64 35.7-64 48c30.3 4.2 48 8 48 40v264a64 64 0 0 0 64 64h192a64 64 0 0 0 64-64V96c0-19 11.5-38.35 12.6-40c1.2-1.9 3.4-4.4 3.4-5.5s-.3-2.45-2.8-2.45M112 176h320"></svg:path>`,
})
export class IonBeakerOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
