import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riTravestiLineIcon],svg[ri-travesti-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.951 8.537A7.5 7.5 0 1 1 7.537 9.95L4.662 7.075L2.187 9.55L.772 8.136l6.364-6.364l1.415 1.414l-2.475 2.475zM13.501 20a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11"></svg:path>`,
})
export class RiTravestiLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
