import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonNeutralFaceBoldIcon],svg[iconamoon-neutral-face-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="12" cy="12" r="9" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></svg:circle><svg:path stroke-linejoin="round" stroke-width="3.75" d="M9 9.5h.01v.01H9zm6 0h.01v.01H15z"></svg:path><svg:path stroke-linecap="round" stroke-width="2.5" d="M9 15h6"></svg:path></svg:g>`,
})
export class IconamoonNeutralFaceBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
