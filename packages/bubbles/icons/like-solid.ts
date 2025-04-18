import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesLikeSolidIcon],svg[bubbles-like-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.837 8.116a1.833 1.833 0 0 0-1.753-2.367h-3.72a.832.832 0 0 1-.751-1.192l.952-1.995a1.62 1.62 0 0 0-.28-1.54a1.642 1.642 0 0 0-2.618.089L6.407 5.73a.84.84 0 0 1-.68.352a.31.31 0 0 0-.31.31v7.542a.33.33 0 0 0 .188.3c2.467 1.194 3.286 1.352 5.295 1.352c.231 0 1.547-.013 2.027-.013c1.787 0 2.976-1.037 3.638-3.186L17.83 8.14zM4.417 6.082H4.4a1 1 0 0 0-.983-.833h-1a.333.333 0 0 0-.333.333v9.334a.333.333 0 0 0 .333.333h1a1 1 0 0 0 1-1z"></svg:path>`,
})
export class BubblesLikeSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
