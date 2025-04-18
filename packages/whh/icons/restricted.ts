import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhRestrictedIcon],svg[whh-restricted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M724 1024H300L0 724V300L300 0h424l300 300v424zm172-671L671 128H353L128 353v318l225 225h318l225-225z"></svg:path>`,
})
export class WhhRestrictedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
