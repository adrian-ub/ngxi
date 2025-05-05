import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconRubyIcon],svg[picon-ruby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1L1 3h1m3-2v2h2M2 3l2 3l1-3M4 7L0 3l2-2h4l2 2"></svg:path>`,
})
export class PiconRubyIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
