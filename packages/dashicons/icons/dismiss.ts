import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsDismissIcon],svg[dashicons-dismiss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8s-8-3.58-8-8s3.58-8 8-8m5 11l-3-3l3-3l-2-2l-3 3l-3-3l-2 2l3 3l-3 3l2 2l3-3l3 3z"></svg:path>`,
})
export class DashiconsDismissIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
