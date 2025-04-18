import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityAsteriskSolidIcon],svg[clarity-asterisk-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m28.89 20.91l-5-2.91l4.87-2.86a3.1 3.1 0 0 0 1.14-1.08a3 3 0 0 0-4.09-4.15L21 12.76V7a3 3 0 0 0-6 0v5.76l-4.85-2.85a3 3 0 1 0-3 5.18l5 2.91l-4.95 2.86a3.1 3.1 0 0 0-1.14 1.08a3 3 0 0 0 4.09 4.14L15 23.24v5.66a3 3 0 0 0 2 2.94A3 3 0 0 0 21 29v-5.76l4.85 2.85a3 3 0 1 0 3-5.18Z" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityAsteriskSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
