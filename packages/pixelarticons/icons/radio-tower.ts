import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsRadioTowerIcon],svg[pixelarticons-radio-tower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2h-2v2h2v12h-2v2h2v-2h2V4h-2zM2 4H0v12h2v2h2v-2H2zm0 0V2h2v2zm4 2H4v8h2zm0 0V4h2v2zm4 0h4v2h-4zm0 6H8V8h2zm4 0h-4v2H8v4H6v4h2v-4h2v-4h4v4h2v4h2v-4h-2v-4h-2zm0 0h2V8h-2zm6-6h-2V4h-2v2h2v8h2z"></svg:path>`,
})
export class PixelarticonsRadioTowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
