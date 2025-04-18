import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundPhonelinkEraseIcon],svg[ic-round-phonelink-erase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 7.7a.7.7 0 0 0-1 0L8 11.2L4.5 7.7c-.28-.28-.72-.28-1 0s-.28.72 0 1L7 12.2l-3.5 3.5c-.28.28-.28.72 0 1s.72.28 1 0L8 13.2l3.5 3.5c.28.28.72.28 1 0s.28-.72 0-1L9 12.2l3.5-3.5a.7.7 0 0 0 0-1M19 1H9c-1.1 0-2 .9-2 2v2c0 .55.45 1 1 1s1-.45 1-1V4h10v16H9v-1c0-.55-.45-1-1-1s-1 .45-1 1v2c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2"></svg:path>`,
})
export class IcRoundPhonelinkEraseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
