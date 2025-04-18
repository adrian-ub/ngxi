import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsSoundwaveIcon],svg[proicons-soundwave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 20.75V3.25m8 11.71V9.04M4 14.96V9.04m12 8.872V6.088M8 17.912V6.088"></svg:path>`,
})
export class ProiconsSoundwaveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
