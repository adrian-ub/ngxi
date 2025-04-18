import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLassoIcon],svg[tabler-lasso-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4.028 13.252C3.371 12.28 3 11.174 3 10c0-3.866 4.03-7 9-7s9 3.134 9 7s-4.03 7-9 7c-1.913 0-3.686-.464-5.144-1.255"></svg:path><svg:path d="M3 15a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></svg:path><svg:path d="M5 17c0 1.42.316 2.805 1 4"></svg:path></svg:g>`,
})
export class TablerLassoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
