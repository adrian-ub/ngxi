import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityApplicationsSolidIcon],svg[clarity-applications-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h6v6H4z" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="currentColor" d="M4 15h6v6H4z" class="clr-i-solid clr-i-solid-path-2"></svg:path><svg:path fill="currentColor" d="M4 26h6v6H4z" class="clr-i-solid clr-i-solid-path-3"></svg:path><svg:path fill="currentColor" d="M15 4h6v6h-6z" class="clr-i-solid clr-i-solid-path-4"></svg:path><svg:path fill="currentColor" d="M15 15h6v6h-6z" class="clr-i-solid clr-i-solid-path-5"></svg:path><svg:path fill="currentColor" d="M15 26h6v6h-6z" class="clr-i-solid clr-i-solid-path-6"></svg:path><svg:path fill="currentColor" d="M26 4h6v6h-6z" class="clr-i-solid clr-i-solid-path-7"></svg:path><svg:path fill="currentColor" d="M26 15h6v6h-6z" class="clr-i-solid clr-i-solid-path-8"></svg:path><svg:path fill="currentColor" d="M26 26h6v6h-6z" class="clr-i-solid clr-i-solid-path-9"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityApplicationsSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
