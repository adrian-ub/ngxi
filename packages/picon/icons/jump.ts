import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconJumpIcon],svg[picon-jump-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5h2L2 2l4-2l2 2v1L6 1L4 2l2 3v1H3v2H2M1 0l1 1l-1 1l-1-1"></svg:path>`,
})
export class PiconJumpIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
