import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonMenuKebabVerticalThinIcon],svg[iconamoon-menu-kebab-vertical-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" d="M12 12h.01v.01H12zm0-7h.01v.01H12zm0 14h.01v.01H12z"></svg:path>`,
})
export class IconamoonMenuKebabVerticalThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
