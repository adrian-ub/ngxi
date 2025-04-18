import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riKickLineIcon],svg[ri-kick-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2h8v2h2V2h8v8h-2v4h2v8h-8v-2h-2v2H3zm10 16h2v2h4v-4h-2v-2h-2v-4h2V8h2V4h-4v2h-2v2H9V4H5v16h4v-4h4z"></svg:path>`,
})
export class RiKickLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
