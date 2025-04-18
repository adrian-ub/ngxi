import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityResourcePoolSolidIcon],svg[clarity-resource-pool-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.57 30.9A16 16 0 0 0 33.95 19H18.43Z" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="currentColor" d="M33.95 17A16 16 0 1 0 7 29.6L17.49 17Z" class="clr-i-solid clr-i-solid-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityResourcePoolSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
