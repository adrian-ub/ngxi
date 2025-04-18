import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonSignDivisionCircleLightIcon],svg[iconamoon-sign-division-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:circle cx="12" cy="11.999" r="9" stroke-linecap="round" stroke-width="1.5"></svg:circle><svg:path stroke-width="2.25" d="M12 8h.01v.01H12zm0 8h.01v.01H12z"></svg:path><svg:path stroke-linecap="round" stroke-width="1.5" d="M15 12H9"></svg:path></svg:g>`,
})
export class IconamoonSignDivisionCircleLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
