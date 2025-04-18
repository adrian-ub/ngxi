import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTable2FilledIcon],svg[tdesign-table-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3.5H1.5v4.318H11zM1.5 9.818v4.364H11V9.818zm0 6.364V20.5H11v-4.318zM13 20.5h9.5v-4.318H13zm9.5-6.318V9.818H13v4.364zm0-6.364V3.5H13v4.318z"></svg:path>`,
})
export class TdesignTable2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
