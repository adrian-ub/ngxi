import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerInnerShadowBottomIcon],svg[tabler-inner-shadow-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M18.364 18.364A9 9 0 1 0 5.636 5.636a9 9 0 0 0 12.728 12.728"></svg:path><svg:path d="M7.757 16.243a6 6 0 0 0 8.486 0"></svg:path></svg:g>`,
})
export class TablerInnerShadowBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
