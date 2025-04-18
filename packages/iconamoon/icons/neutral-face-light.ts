import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonNeutralFaceLightIcon],svg[iconamoon-neutral-face-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="12" cy="12" r="9" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></svg:circle><svg:path stroke-linejoin="round" stroke-width="2.25" d="M9.01 9.5v.01H9V9.5zm6 0v.01H15V9.5z"></svg:path><svg:path stroke-linecap="round" stroke-width="1.5" d="M9 15h6"></svg:path></svg:g>`,
})
export class IconamoonNeutralFaceLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
