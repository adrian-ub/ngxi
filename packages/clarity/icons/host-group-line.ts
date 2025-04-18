import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityHostGroupLineIcon],svg[clarity-host-group-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.08 34h-14A1.08 1.08 0 0 1 6 33V12a1.08 1.08 0 0 1 1.08-1.08h14A1.08 1.08 0 0 1 22.16 12v21a1.08 1.08 0 0 1-1.08 1M8.16 31.88H20V13H8.16Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M10.08 14.96h8v2h-8z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M26.1 27.81h-2V9h-12V7h13a1 1 0 0 1 1 1Z" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="currentColor" d="M30.08 23h-2V5h-11V3h12a1 1 0 0 1 1 1Z" class="clr-i-outline clr-i-outline-path-4"></svg:path><svg:path fill="currentColor" d="M13.08 27.88h2v2.16h-2z" class="clr-i-outline clr-i-outline-path-5"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityHostGroupLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
