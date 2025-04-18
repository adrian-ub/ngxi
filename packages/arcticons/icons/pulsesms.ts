import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPulsesmsIcon],svg[arcticons-pulsesms-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.335 14.005h23.128m-23.128 6.292h16.027m-16.027 6.291h8.926M38.858 5.5H9.142c-2.2 0-4 1.8-4 4v33l7.418-7.418h26.298c2.2 0 4-1.8 4-4V9.5c0-2.2-1.8-4-4-4"></svg:path>`,
})
export class ArcticonsPulsesmsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
