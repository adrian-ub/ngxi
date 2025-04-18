import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCallMissedIcon],svg[material-symbols-light-call-missed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.096 16.714L5 9.616v5.287H4v-7h7v1H5.708l6.388 6.388l7.216-7.215l.707.714z"></svg:path>`,
})
export class MaterialSymbolsLightCallMissedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
