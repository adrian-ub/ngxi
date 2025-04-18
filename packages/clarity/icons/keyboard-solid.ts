import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityKeyboardSolidIcon],svg[clarity-keyboard-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 8H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2m-13 5h2v2h-2Zm0 4h2v2h-2Zm-4-4h2v2h-2Zm0 4h2v2h-2Zm-4-4h2v2h-2ZM9 24H7v-2h2Zm0-5H7v-2h2Zm0-4H7v-2h2Zm2 2h2v2h-2Zm13.88 7H11.13v-2h13.75Zm.12-5h-2v-2h2Zm0-4h-2v-2h2Zm3.94 9H27v-2h1.94Zm.06-5h-2v-2h2Zm0-4h-2v-2h2Z" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityKeyboardSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
