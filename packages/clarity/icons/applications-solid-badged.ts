import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityApplicationsSolidBadgedIcon],svg[clarity-applications-solid-badged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h6v6H4z" class="clr-i-solid--badged clr-i-solid-path-1--badged"></svg:path><svg:path fill="currentColor" d="M4 15h6v6H4z" class="clr-i-solid--badged clr-i-solid-path-2--badged"></svg:path><svg:path fill="currentColor" d="M4 26h6v6H4z" class="clr-i-solid--badged clr-i-solid-path-3--badged"></svg:path><svg:path fill="currentColor" d="M15 4h6v6h-6z" class="clr-i-solid--badged clr-i-solid-path-4--badged"></svg:path><svg:path fill="currentColor" d="M15 15h6v6h-6z" class="clr-i-solid--badged clr-i-solid-path-5--badged"></svg:path><svg:path fill="currentColor" d="M15 26h6v6h-6z" class="clr-i-solid--badged clr-i-solid-path-6--badged"></svg:path><svg:path fill="currentColor" d="M26 15h6v6h-6z" class="clr-i-solid--badged clr-i-solid-path-7--badged"></svg:path><svg:path fill="currentColor" d="M26 26h6v6h-6z" class="clr-i-solid--badged clr-i-solid-path-8--badged"></svg:path><svg:circle cx="30" cy="6" r="5" fill="currentColor" class="clr-i-solid--badged clr-i-solid-path-9--badged clr-i-badge"></svg:circle><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityApplicationsSolidBadgedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
