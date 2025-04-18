import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMultiplier1x32FilledIcon],svg[fluent-multiplier-1x-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 10.25a1.25 1.25 0 0 0-2.164-.853c-.204.22-.363.4-.506.562c-.23.26-.422.479-.709.752c-.415.394-.993.855-2.014 1.467a1.25 1.25 0 1 0 1.286 2.144A17 17 0 0 0 11 13.242v8.508a1.25 1.25 0 1 0 2.5 0zm4.634 6.116a1.25 1.25 0 0 0-1.768 1.768l1.366 1.366l-1.366 1.366a1.25 1.25 0 0 0 1.768 1.768l1.366-1.366l1.366 1.366a1.25 1.25 0 0 0 1.768-1.768L21.268 19.5l1.366-1.366a1.25 1.25 0 0 0-1.768-1.768L19.5 17.732z"></svg:path>`,
})
export class FluentMultiplier1x32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
