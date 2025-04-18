import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonMenuKebabHorizontalLightIcon],svg[iconamoon-menu-kebab-horizontal-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2.25" d="M12.01 12v.01H12V12zm7 0v.01H19V12zm-14 0v.01H5V12z"></svg:path>`,
})
export class IconamoonMenuKebabHorizontalLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
