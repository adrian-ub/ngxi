import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconWhatsappIcon],svg[picon-whatsapp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7q5 1 5-3T4 0q-5 0-3 6L0 8m7-2Q1 7 2 1h2v2H3l2 2V4h2"></svg:path>`,
})
export class PiconWhatsappIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
