import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonSignDivisionIcon],svg[iconamoon-sign-division-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:path stroke-width="3" d="M12 6.5h.01v.01H12zm0 11h.01v.01H12z"></svg:path><svg:path stroke-linecap="round" stroke-width="2" d="M18 12H6"></svg:path></svg:g>`,
})
export class IconamoonSignDivisionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
