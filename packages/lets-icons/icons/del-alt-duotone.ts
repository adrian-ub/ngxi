import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsDelAltDuotoneIcon],svg[lets-icons-del-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="12" cy="7" fill="currentColor" fill-opacity=".25" rx="7" ry="3"></svg:ellipse><svg:path fill="currentColor" fill-rule="evenodd" d="M12 10c3.336 0 6.127-1 6.83-2.34c.01-.02.06-.006.057.018l-1.775 10.647a1.8 1.8 0 0 1-.646 1.102a7.15 7.15 0 0 1-8.932 0a1.8 1.8 0 0 1-.646-1.102L5.113 7.678c-.004-.024.046-.039.058-.017C5.873 9 8.664 10 12 10" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsDelAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
