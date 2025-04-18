import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityNetworkSwitchLineIcon],svg[clarity-network-switch-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M33.91 18.47L30.78 8.41A2 2 0 0 0 28.87 7H7.13a2 2 0 0 0-1.91 1.41L2.09 18.48a2 2 0 0 0-.09.59V27a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2v-7.94a2 2 0 0 0-.09-.59M32 27H4v-7.94L7.13 9h21.74L32 19.06Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M7.12 22h1.8v3h-1.8z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M12.12 22h1.8v3h-1.8z" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="currentColor" d="M17.11 22h1.8v3h-1.8z" class="clr-i-outline clr-i-outline-path-4"></svg:path><svg:path fill="currentColor" d="M22.1 22h1.8v3h-1.8z" class="clr-i-outline clr-i-outline-path-5"></svg:path><svg:path fill="currentColor" d="M27.1 22h1.8v3h-1.8z" class="clr-i-outline clr-i-outline-path-6"></svg:path><svg:path fill="currentColor" d="M6.23 18h23.69v1.4H6.23z" class="clr-i-outline clr-i-outline-path-7"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityNetworkSwitchLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
