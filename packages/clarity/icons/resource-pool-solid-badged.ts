import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityResourcePoolSolidBadgedIcon],svg[clarity-resource-pool-solid-badged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.57 30.9A16 16 0 0 0 33.95 19H18.43Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"></svg:path><svg:path fill="currentColor" d="M33.95 17a16 16 0 0 0-.84-4.18a7.49 7.49 0 0 1-9.92-9.94A16 16 0 0 0 7 29.6L17.49 17Z" class="clr-i-solid--badged clr-i-solid-path-2--badged"></svg:path><svg:circle cx="30" cy="6" r="5" fill="currentColor" class="clr-i-solid--badged clr-i-solid-path-3--badged clr-i-badge"></svg:circle><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityResourcePoolSolidBadgedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
