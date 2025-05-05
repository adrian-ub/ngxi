import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconRocketIcon],svg[picon-rocket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4L1 7l3-2m2-3H5v1h1M3 6L0 8l2-3H0l1-2h1l2-2l4-1l-1 4l-2 2v1L3 8"></svg:path>`,
})
export class PiconRocketIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
