import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riArrowLeftWideLineIcon],svg[ri-arrow-left-wide-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.369 12l4.747-8.968l1.768.936L10.632 12l4.252 8.032l-1.768.936z"></svg:path>`,
})
export class RiArrowLeftWideLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
