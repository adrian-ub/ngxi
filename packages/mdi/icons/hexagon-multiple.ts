import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHexagonMultipleIcon],svg[mdi-hexagon-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.25 2c.19 0 .36.11.44.26l2.22 3.96l.09.28l-.09.28l-2.22 3.96c-.08.15-.25.26-.44.26h-4.5c-.19 0-.36-.11-.44-.26L3.09 6.78L3 6.5l.09-.28l2.22-3.96c.08-.15.25-.26.44-.26zm0 11c.19 0 .36.11.44.26l2.22 3.96l.09.28l-.09.28l-2.22 3.96c-.08.15-.25.26-.44.26h-4.5c-.19 0-.36-.11-.44-.26l-2.22-3.96L3 17.5l.09-.28l2.22-3.96c.08-.15.25-.26.44-.26zm9.25-5.5c.19 0 .36.11.44.26l2.22 3.96l.09.28l-.09.28l-2.22 3.96c-.08.15-.25.26-.44.26H15c-.19 0-.36-.11-.44-.26l-2.22-3.96l-.09-.28l.09-.28l2.22-3.96c.08-.15.25-.26.44-.26z"></svg:path>`,
})
export class MdiHexagonMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
