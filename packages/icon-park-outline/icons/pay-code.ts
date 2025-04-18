import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlinePayCodeIcon],svg[icon-park-outline-pay-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 4H4v40h40z"></svg:path><svg:path stroke-linecap="round" d="M12 16v16m8-16v16m8-16v16m8-16v16"></svg:path></svg:g>`,
})
export class IconParkOutlinePayCodeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
