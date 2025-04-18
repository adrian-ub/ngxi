import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityCheckCircleSolidIcon],svg[clarity-check-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 18A12 12 0 1 1 18 6a12 12 0 0 1 12 12m-4.77-2.16a1.4 1.4 0 0 0-2-2l-6.77 6.77L13 17.16a1.4 1.4 0 0 0-2 2l5.45 5.45Z" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityCheckCircleSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
