import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsLogOutCircleIcon],svg[bx-bxs-log-out-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 3c-4.963 0-9 4.037-9 9v.001l5-4v3h7v2H8v3l-5-4C3.001 16.964 7.037 21 12 21s9-4.037 9-9s-4.037-9-9-9z" fill="currentColor"></svg:path>`,
})
export class BxBxsLogOutCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
