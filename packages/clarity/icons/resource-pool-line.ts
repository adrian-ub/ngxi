import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityResourcePoolLineIcon],svg[clarity-resource-pool-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2M4 18a14 14 0 0 1 27.95-1H17.49L8.3 28.07A14 14 0 0 1 4 18m14 14a13.9 13.9 0 0 1-8.16-2.65L18.43 19h13.52A14 14 0 0 1 18 32" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityResourcePoolLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
