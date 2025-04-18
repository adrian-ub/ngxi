import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerEggOffIcon],svg[tabler-egg-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.927 17.934C16.716 19.792 14.576 20.887 12 21c-4.2 0-7-2.763-7-6.917c0-2.568.753-5.14 1.91-7.158m1.732-2.297C9.676 3.608 10.838 2.998 12 3c3.5.007 7 5.545 7 11.083q0 .447-.045.868M3 3l18 18"></svg:path>`,
})
export class TablerEggOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
