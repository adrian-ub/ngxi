import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTicketThinIcon],svg[ph-ticket-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 100a4 4 0 0 0 4-4V64a12 12 0 0 0-12-12H32a12 12 0 0 0-12 12v32a4 4 0 0 0 4 4a28 28 0 0 1 0 56a4 4 0 0 0-4 4v32a12 12 0 0 0 12 12h192a12 12 0 0 0 12-12v-32a4 4 0 0 0-4-4a28 28 0 0 1 0-56M28 192v-28.22a36 36 0 0 0 0-71.56V64a4 4 0 0 1 4-4h60v136H32a4 4 0 0 1-4-4m168-64a36.06 36.06 0 0 0 32 35.78V192a4 4 0 0 1-4 4H100V60h124a4 4 0 0 1 4 4v28.22A36.06 36.06 0 0 0 196 128"></svg:path>`,
})
export class PhTicketThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
