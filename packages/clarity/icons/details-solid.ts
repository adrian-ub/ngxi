import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityDetailsSolidIcon],svg[clarity-details-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 6H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2M19 22H9a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2m8-4H9a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2m0-4H9a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityDetailsSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
