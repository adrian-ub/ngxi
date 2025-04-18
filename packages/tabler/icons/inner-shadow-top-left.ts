import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerInnerShadowTopLeftIcon],svg[tabler-inner-shadow-top-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 3a9 9 0 1 1 0 18a9 9 0 0 1 0-18"></svg:path><svg:path d="M6 12a6 6 0 0 1 6-6"></svg:path></svg:g>`,
})
export class TablerInnerShadowTopLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
