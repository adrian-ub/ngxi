import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsFilingCabinetIcon],svg[flat-color-icons-filing-cabinet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#263238" d="M12 44h4v2h-4zm20 0h4v2h-4z"></svg:path><svg:path fill="#607D8B" d="M8 41V7c0-2.2 1.8-4 4-4h24c2.2 0 4 1.8 4 4v34c0 2.2-1.8 4-4 4H12c-2.2 0-4-1.8-4-4"></svg:path><svg:path fill="#B0BEC5" d="M12 17V8c0-.6.4-1 1-1h22c.6 0 1 .4 1 1v9zm0 2h24v10H12zm0 21v-9h24v9c0 .6-.4 1-1 1H13c-.6 0-1-.4-1-1"></svg:path><svg:path fill="#546E7A" d="M20 11h8v2h-8zm0 12h8v2h-8zm0 12h8v2h-8z"></svg:path>`,
})
export class FlatColorIconsFilingCabinetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
