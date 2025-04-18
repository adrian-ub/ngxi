import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsJumpTimeIcon],svg[lets-icons-jump-time-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="m16.336 6.462l-4.108 9.037a.25.25 0 0 1-.456 0L7.664 6.462a.5.5 0 0 1 .713-.636l3.494 2.097a.25.25 0 0 0 .258 0l3.494-2.097a.5.5 0 0 1 .713.636ZM4 18h5m6 0h5"></svg:path>`,
})
export class LetsIconsJumpTimeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
