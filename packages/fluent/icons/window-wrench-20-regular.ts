import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWindowWrench20RegularIcon],svg[fluent-window-wrench-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v2.624a1.38 1.38 0 0 0-.993-.594H16V7H4v7a2 2 0 0 0 2 2h2.492a2.5 2.5 0 0 0-.443 1H6a3 3 0 0 1-3-3zm3-2a2 2 0 0 0-2 2h12a2 2 0 0 0-2-2zm10.242 5.361a.39.39 0 0 0-.35-.337a3.518 3.518 0 0 0-3.723 4.676l-2.727 2.726a1.508 1.508 0 0 0 2.132 2.132l2.726-2.726a3.518 3.518 0 0 0 4.676-3.724c-.042-.366-.48-.471-.742-.21l-.975.975q-.12.12-.259.208a1.508 1.508 0 0 1-1.873-2.34l.975-.975a.49.49 0 0 0 .14-.405"></svg:path>`,
})
export class FluentWindowWrench20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
