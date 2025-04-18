import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiIkeaFloaltPanelIcon],svg[cbi-ikea-floalt-panel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.032 21.707h.679V2.428h-.619V2h-.388l-2.415 2.052v16.392L12.727 22h.3zm-2.544-2.368V5.044s1.978-1.33 2.009-1.421v16.889z"></svg:path>`,
})
export class CbiIkeaFloaltPanelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
