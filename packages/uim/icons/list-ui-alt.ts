import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimListUiAltIcon],svg[uim-list-ui-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.5 8h-14a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2m0 5h-10a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2m0 5h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2"></svg:path><svg:circle cx="3.5" cy="7" r="1" fill="currentColor"></svg:circle><svg:circle cx="7.5" cy="12" r="1" fill="currentColor"></svg:circle><svg:circle cx="11.5" cy="17" r="1" fill="currentColor"></svg:circle>`,
})
export class UimListUiAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
