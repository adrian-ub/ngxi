import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityRupeeSolidIcon],svg[clarity-rupee-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m5.88 9H26a1 1 0 0 1 0 2h-1.74v.19a6.09 6.09 0 0 1-6 6.2h-2l6.82 8.06a1.25 1.25 0 0 1-1.91 1.62l-8.54-10.13a1.25 1.25 0 0 1 1-2.06h4.71a3.59 3.59 0 0 0 3.48-3.69v-.2h-9a1 1 0 0 1 0-2h8.32a3.41 3.41 0 0 0-2.78-1.5h-5.61a1.25 1.25 0 0 1 0-2.5H26a1 1 0 0 1 0 2h-3.32a6.2 6.2 0 0 1 1.2 2.01" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityRupeeSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
