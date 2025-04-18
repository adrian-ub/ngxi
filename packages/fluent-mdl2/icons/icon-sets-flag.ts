import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2IconSetsFlagIcon],svg[fluent-mdl2-icon-sets-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 0h128v2048H256zm1782 576L512 1148V4zM640 964l1034-388L640 188z"></svg:path>`,
})
export class FluentMdl2IconSetsFlagIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
