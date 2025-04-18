import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[epBriefcaseIcon],svg[ep-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 320V128h384v192h192v192H128V320zM128 576h768v320H128zm256-256h256.064V192H384z"></svg:path>`,
})
export class EpBriefcaseIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
