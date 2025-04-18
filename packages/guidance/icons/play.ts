import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidancePlayIcon],svg[guidance-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m2 22.5l1 .5c7.5-5 12.5-7.75 19-10.25v-1.5C15.5 8.75 10.5 6 3 1l-1 .5s.5 6.2.5 10.5S2 22.5 2 22.5Z"></svg:path>`,
})
export class GuidancePlayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
