import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMirrorIcon],svg[mdi-mirror-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1c4.69 0 8.5 4.93 8.5 11c0 6.08-3.81 11-8.5 11s-8.5-4.92-8.5-11C3.5 5.93 7.31 1 12 1m0 2c-3.59 0-6.5 4.03-6.5 9s2.91 9 6.5 9s6.5-4.03 6.5-9s-2.91-9-6.5-9m-3.71 7.28l3.24-3.25l1.06 1.06l-3.24 3.25zm.41 4.33l5.66-5.66L15.42 10l-5.66 5.67z"></svg:path>`,
})
export class MdiMirrorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
