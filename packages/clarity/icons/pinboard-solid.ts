import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityPinboardSolidIcon],svg[clarity-pinboard-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 30H6V6h16V4H6a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V14h-2Z" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="currentColor" d="m33.57 9.33l-7-7a1 1 0 0 0-1.41 1.41l1.38 1.38l-4 4c-2-.87-4.35.14-5.92 1.68l-.72.71l3.54 3.54l-3.67 3.67l1.41 1.41l3.67-3.67L24.37 20l.71-.72c1.54-1.57 2.55-3.91 1.68-5.92l4-4l1.38 1.38a1 1 0 1 0 1.41-1.41Z" class="clr-i-solid clr-i-solid-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityPinboardSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
