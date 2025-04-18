import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiPitch11Icon],svg[maki-pitch-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M4 2a1 1 0 1 1 0-2a1 1 0 0 1 0 2zm6.5 6H9L8 5L7 3.25L8 3l2.3 1a.531.531 0 0 0 .36-1L8 2H6L4 3L3 4H1.47a.5.5 0 0 0 0 1H4l1-1l1 2l-2 1v3.5a.5.5 0 0 0 1 0V7.39L7 7l1 2h2.5a.5.5 0 0 0 0-1z" fill="currentColor"></svg:path>`,
})
export class MakiPitch11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
