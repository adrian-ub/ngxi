import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPalette1Icon],svg[tdesign-palette-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4c-1.584 0-2.889 1.303-2.889 2.938c0 1.634 1.305 2.937 2.889 2.937s2.889-1.303 2.889-2.937C14.889 5.303 13.584 4 12 4M7.111 6.938C7.111 4.222 9.288 2 12 2s4.889 2.222 4.889 4.938s-2.177 4.937-4.889 4.937s-4.889-2.222-4.889-4.937M5.89 14.125c-1.585 0-2.89 1.303-2.89 2.938C3 18.697 4.305 20 5.889 20s2.889-1.303 2.889-2.937c0-1.635-1.305-2.938-2.89-2.938M1 17.063c0-2.716 2.177-4.938 4.889-4.938s4.889 2.222 4.889 4.938S8.6 22 5.888 22C3.179 22 1 19.778 1 17.063m17.111-2.938c-1.584 0-2.889 1.303-2.889 2.938c0 1.634 1.305 2.937 2.89 2.937C19.694 20 21 18.697 21 17.063c0-1.635-1.305-2.938-2.889-2.938m-4.889 2.938c0-2.716 2.177-4.938 4.89-4.938c2.71 0 4.888 2.222 4.888 4.938S20.823 22 18.111 22s-4.889-2.222-4.889-4.937"></svg:path>`,
})
export class TdesignPalette1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
