import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityListOutlineBadgedIcon],svg[clarity-list-outline-badged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 12h9v2h-9z" class="clr-i-outline--badged clr-i-outline-path-1--badged"></svg:path><svg:path fill="currentColor" d="M15 16h9v2h-9z" class="clr-i-outline--badged clr-i-outline-path-2--badged"></svg:path><svg:path fill="currentColor" d="M15 20h9v2h-9z" class="clr-i-outline--badged clr-i-outline-path-3--badged"></svg:path><svg:path fill="currentColor" d="M15 24h9v2h-9z" class="clr-i-outline--badged clr-i-outline-path-4--badged"></svg:path><svg:path fill="currentColor" d="M11 8h2v2h-2z" class="clr-i-outline--badged clr-i-outline-path-5--badged"></svg:path><svg:path fill="currentColor" d="M11 12h2v2h-2z" class="clr-i-outline--badged clr-i-outline-path-6--badged"></svg:path><svg:path fill="currentColor" d="M11 16h2v2h-2z" class="clr-i-outline--badged clr-i-outline-path-7--badged"></svg:path><svg:path fill="currentColor" d="M11 20h2v2h-2z" class="clr-i-outline--badged clr-i-outline-path-8--badged"></svg:path><svg:path fill="currentColor" d="M11 24h2v2h-2z" class="clr-i-outline--badged clr-i-outline-path-9--badged"></svg:path><svg:path fill="currentColor" d="M15 8v2h8.66a7.5 7.5 0 0 1-.89-2Z" class="clr-i-outline--badged clr-i-outline-path-10--badged"></svg:path><svg:path fill="currentColor" d="M28 13.22V32H8V4h14.78a7.5 7.5 0 0 1 .88-2H8a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V13.5a7.5 7.5 0 0 1-2-.28" class="clr-i-outline--badged clr-i-outline-path-11--badged"></svg:path><svg:circle cx="30" cy="6" r="5" fill="currentColor" class="clr-i-outline--badged clr-i-outline-path-12--badged clr-i-badge"></svg:circle><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityListOutlineBadgedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
