import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhModxIcon],svg[whh-modx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 128L807 453l89 59v320L660 674l-30 45l266 177v128L571 807l-59 89H0l217-325l-89-59V384l148 99l29-45l-177-118V0l325 217l59-89z"></svg:path>`,
})
export class WhhModxIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
