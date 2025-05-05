import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCppIcon],svg[picon-cpp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 2v4l4 2l4-2V2L4 0M3 5h3v1H2V2h4v1H3"></svg:path>`,
})
export class PiconCppIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
