import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityNetworkSwitchOutlineBadgedIcon],svg[clarity-network-switch-outline-badged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.12 22h1.8v3h-1.8z" class="clr-i-outline--badged clr-i-outline-path-1--badged"></svg:path><svg:path fill="currentColor" d="M12.12 22h1.8v3h-1.8z" class="clr-i-outline--badged clr-i-outline-path-2--badged"></svg:path><svg:path fill="currentColor" d="M17.11 22h1.8v3h-1.8z" class="clr-i-outline--badged clr-i-outline-path-3--badged"></svg:path><svg:path fill="currentColor" d="M22.1 22h1.8v3h-1.8z" class="clr-i-outline--badged clr-i-outline-path-4--badged"></svg:path><svg:path fill="currentColor" d="M27.1 22h1.8v3h-1.8z" class="clr-i-outline--badged clr-i-outline-path-5--badged"></svg:path><svg:path fill="currentColor" d="M6.23 18h23.69v1.4H6.23z" class="clr-i-outline--badged clr-i-outline-path-6--badged"></svg:path><svg:path fill="currentColor" d="m33.91 18.47l-1.65-5.32a7.5 7.5 0 0 1-2 .33L32 19.06V27H4v-7.94L7.13 9h16a7.5 7.5 0 0 1-.55-2H7.13a2 2 0 0 0-1.91 1.41L2.09 18.48a2 2 0 0 0-.09.59V27a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2v-7.94a2 2 0 0 0-.09-.59" class="clr-i-outline--badged clr-i-outline-path-7--badged"></svg:path><svg:circle cx="30" cy="6" r="5" fill="currentColor" class="clr-i-outline--badged clr-i-outline-path-8--badged clr-i-badge"></svg:circle><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityNetworkSwitchOutlineBadgedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
