import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastMagnifyingGlassTiltedRightIcon],svg[fluent-emoji-high-contrast-magnifying-glass-tilted-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M18.779 21a8 8 0 1 0 0-16a8 8 0 0 0 0 16m4.27-9.786c-.717.414-1.747-.025-2.299-.982s-.418-2.068.299-2.482c.718-.414 1.747.025 2.3.982c.551.957.418 2.068-.3 2.482"></svg:path><svg:path d="M18.779 24c6.075 0 11-4.925 11-11s-4.925-11-11-11s-11 4.925-11 11c0 2.327.722 4.485 1.955 6.263a3.75 3.75 0 0 0-3.454 1.012l-3.182 3.182a3.75 3.75 0 1 0 5.304 5.303l3.182-3.182a3.75 3.75 0 0 0 1.005-3.483A10.95 10.95 0 0 0 18.78 24m0-2a9 9 0 1 1 0-18a9 9 0 0 1 0 18"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastMagnifyingGlassTiltedRightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
