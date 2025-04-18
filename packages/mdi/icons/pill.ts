import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPillIcon],svg[mdi-pill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.22 11.29l7.07-7.07a6.01 6.01 0 0 1 8.49 0c2.34 2.34 2.34 6.14 0 8.49l-7.07 7.07c-2.35 2.34-6.15 2.34-8.49 0a6.01 6.01 0 0 1 0-8.49m1.42 1.42a3.98 3.98 0 0 0-1.04 3.86l5.99-5.98l4.24 4.24l3.53-3.54a3.98 3.98 0 0 0 0-5.65a3.98 3.98 0 0 0-5.65 0z"></svg:path>`,
})
export class MdiPillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
