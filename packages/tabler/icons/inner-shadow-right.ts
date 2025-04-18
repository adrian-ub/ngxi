import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerInnerShadowRightIcon],svg[tabler-inner-shadow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M18.364 18.364A9 9 0 1 1 5.636 5.636a9 9 0 0 1 12.728 12.728"></svg:path><svg:path d="M16.243 7.757a6 6 0 0 1 0 8.486"></svg:path></svg:g>`,
})
export class TablerInnerShadowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
