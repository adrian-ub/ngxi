import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityRedoLineIcon],svg[clarity-redo-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 4.22a1 1 0 0 0-1.41 1.42l5.56 5.49h-13A11 11 0 0 0 10.07 32a1 1 0 0 0 .93-1.82a9 9 0 0 1-5-8a9.08 9.08 0 0 1 9.13-9h13l-5.54 5.48A1 1 0 0 0 24 20l8-7.91Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityRedoLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
