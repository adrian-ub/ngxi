import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonMenuKebabVerticalCircleLightIcon],svg[iconamoon-menu-kebab-vertical-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:circle cx="12" cy="12" r="9" stroke-linecap="round" stroke-width="1.5"></svg:circle><svg:path stroke-width="2.25" d="M12 12h.01v.01H12zm0-4.5h.01v.01H12zm0 9h.01v.01H12z"></svg:path></svg:g>`,
})
export class IconamoonMenuKebabVerticalCircleLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
