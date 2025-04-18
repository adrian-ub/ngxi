import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsDelAltFillIcon],svg[lets-icons-del-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:ellipse cx="12" cy="7" stroke="currentColor" stroke-linecap="round" stroke-width="2" rx="7" ry="3"></svg:ellipse><svg:path fill="currentColor" d="M7 18L5 7l3 3h8l3-3l-2 11l-3 2h-4z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m5 7l1.996 10.98a.1.1 0 0 0 .019.035v0a7.05 7.05 0 0 0 9.97 0v0a.1.1 0 0 0 .019-.036L19 7"></svg:path></svg:g>`,
})
export class LetsIconsDelAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
