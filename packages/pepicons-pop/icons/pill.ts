import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopPillIcon],svg[pepicons-pop-pill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m10.546 4.182l6.364 6.364a4.5 4.5 0 1 1-6.364 6.364l-6.364-6.364a4.5 4.5 0 1 1 6.364-6.364M13 9.5q-1-1-2.5-.5t-2 3l3.42 3.444l.006.006c.973.973 2.55.973 3.524 0l.007-.008a2.49 2.49 0 0 0-.015-3.52z" clip-rule="evenodd"></svg:path>`,
})
export class PepiconsPopPillIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
