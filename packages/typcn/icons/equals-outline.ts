import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnEqualsOutlineIcon],svg[typcn-equals-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 12H6c-1.654 0-3-1.346-3-3s1.346-3 3-3h12c1.654 0 3 1.346 3 3s-1.346 3-3 3M6 8a1.001 1.001 0 0 0 0 2h12a1.001 1.001 0 0 0 0-2zm12 11H6c-1.654 0-3-1.346-3-3s1.346-3 3-3h12c1.654 0 3 1.346 3 3s-1.346 3-3 3M6 15a1.001 1.001 0 0 0 0 2h12a1.001 1.001 0 0 0 0-2z"></svg:path>`,
})
export class TypcnEqualsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
