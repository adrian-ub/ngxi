import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityPlusCircleSolidIcon],svg[clarity-plus-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M34 18A16 16 0 1 1 18 2a16 16 0 0 1 16 16m-8.41-1.5H19.5v-6.09a1.5 1.5 0 0 0-3 0v6.09h-6.09a1.5 1.5 0 0 0 0 3h6.09v6.09a1.5 1.5 0 0 0 3 0V19.5h6.09a1.5 1.5 0 0 0 0-3" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityPlusCircleSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
