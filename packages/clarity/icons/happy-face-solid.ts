import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityHappyFaceSolidIcon],svg[clarity-happy-face-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2M8.89 13.89a2 2 0 1 1 2 2a2 2 0 0 1-2-2m9.24 14.32a8.67 8.67 0 0 1-8.26-6h16.51a8.67 8.67 0 0 1-8.25 6m6.93-12.32a2 2 0 1 1 2-2a2 2 0 0 1-2.01 2Z" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityHappyFaceSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
