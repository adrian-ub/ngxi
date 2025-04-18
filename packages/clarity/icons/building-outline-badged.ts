import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityBuildingOutlineBadgedIcon],svg[clarity-building-outline-badged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.88 3H6.12A2.12 2.12 0 0 0 4 5.12V33h18V5.12A2.12 2.12 0 0 0 19.88 3M20 31h-3v-3H9v3H6V5.12A.12.12 0 0 1 6.12 5h13.76a.12.12 0 0 1 .12.12Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"></svg:path><svg:path fill="currentColor" d="M8 8h2v2H8z" class="clr-i-outline--badged clr-i-outline-path-2--badged"></svg:path><svg:path fill="currentColor" d="M12 8h2v2h-2z" class="clr-i-outline--badged clr-i-outline-path-3--badged"></svg:path><svg:path fill="currentColor" d="M16 8h2v2h-2z" class="clr-i-outline--badged clr-i-outline-path-4--badged"></svg:path><svg:path fill="currentColor" d="M8 13h2v2H8z" class="clr-i-outline--badged clr-i-outline-path-5--badged"></svg:path><svg:path fill="currentColor" d="M12 13h2v2h-2z" class="clr-i-outline--badged clr-i-outline-path-6--badged"></svg:path><svg:path fill="currentColor" d="M16 13h2v2h-2z" class="clr-i-outline--badged clr-i-outline-path-7--badged"></svg:path><svg:path fill="currentColor" d="M8 18h2v2H8z" class="clr-i-outline--badged clr-i-outline-path-8--badged"></svg:path><svg:path fill="currentColor" d="M12 18h2v2h-2z" class="clr-i-outline--badged clr-i-outline-path-9--badged"></svg:path><svg:path fill="currentColor" d="M16 18h2v2h-2z" class="clr-i-outline--badged clr-i-outline-path-10--badged"></svg:path><svg:path fill="currentColor" d="M8 23h2v2H8z" class="clr-i-outline--badged clr-i-outline-path-11--badged"></svg:path><svg:path fill="currentColor" d="M12 23h2v2h-2z" class="clr-i-outline--badged clr-i-outline-path-12--badged"></svg:path><svg:path fill="currentColor" d="M16 23h2v2h-2z" class="clr-i-outline--badged clr-i-outline-path-13--badged"></svg:path><svg:path fill="currentColor" d="M23 13h2v2h-2z" class="clr-i-outline--badged clr-i-outline-path-14--badged"></svg:path><svg:path fill="currentColor" d="M27 13h2v2h-2z" class="clr-i-outline--badged clr-i-outline-path-15--badged"></svg:path><svg:path fill="currentColor" d="M23 18h2v2h-2z" class="clr-i-outline--badged clr-i-outline-path-16--badged"></svg:path><svg:path fill="currentColor" d="M27 18h2v2h-2z" class="clr-i-outline--badged clr-i-outline-path-17--badged"></svg:path><svg:path fill="currentColor" d="M23 23h2v2h-2z" class="clr-i-outline--badged clr-i-outline-path-18--badged"></svg:path><svg:path fill="currentColor" d="M27 23h2v2h-2z" class="clr-i-outline--badged clr-i-outline-path-19--badged"></svg:path><svg:path fill="currentColor" d="M31 13.43V31h-8v2h10V12.87a7.5 7.5 0 0 1-2 .56" class="clr-i-outline--badged clr-i-outline-path-20--badged"></svg:path><svg:circle cx="30" cy="6" r="5" fill="currentColor" class="clr-i-outline--badged clr-i-outline-path-21--badged clr-i-badge"></svg:circle><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityBuildingOutlineBadgedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
