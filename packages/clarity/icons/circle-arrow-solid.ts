import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityCircleArrowSolidIcon],svg[clarity-circle-arrow-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m8 15.57a1.43 1.43 0 0 1-2 0L19.4 13v14.14a1.4 1.4 0 0 1-2.8 0v-14l-4.43 4.43a1.4 1.4 0 0 1-2-2l7.91-7.87L26 15.59a1.4 1.4 0 0 1 0 1.98" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityCircleArrowSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
