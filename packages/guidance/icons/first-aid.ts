import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceFirstAidIcon],svg[guidance-first-aid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M7.527 4.5H.5v.25l.055.31a45.7 45.7 0 0 1 0 15.88l-.055.31v.25h23v-.25l-.055-.31a45.7 45.7 0 0 1 0-15.88l.055-.31V4.5h-7.027m-8.946 0a4.5 4.5 0 0 1 8.946 0m-8.946 0h8.946m-5.973 4v3h-3v3h3v3h3v-3h3v-3h-3v-3z"></svg:path>`,
})
export class GuidanceFirstAidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
