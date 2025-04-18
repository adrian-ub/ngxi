import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiCopyIcon],svg[oui-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.4 0a.85.85 0 0 1 .622.273l2.743 3a.88.88 0 0 1 .235.602v9.25a.867.867 0 0 1-.857.875H3.857A.867.867 0 0 1 3 13.125V.875C3 .392 3.384 0 3.857 0zM14 4h-2.6a.4.4 0 0 1-.4-.4V1H4v12h10z"></svg:path><svg:path fill="currentColor" d="M3 1H2a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1h-1v1H2V2h1z"></svg:path>`,
})
export class OuiCopyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
