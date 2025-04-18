import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineStraightCapIcon],svg[streamline-straight-cap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.137 7A1.818 1.818 0 1 1 .5 7a1.818 1.818 0 0 1 3.637 0m-.004 0H13.5"></svg:path><svg:path d="M13.5 2.152H2.871a.553.553 0 0 0-.552.553v2.48M13.5 11.848H2.871a.553.553 0 0 1-.552-.553v-2.48"></svg:path></svg:g>`,
})
export class StreamlineStraightCapIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
