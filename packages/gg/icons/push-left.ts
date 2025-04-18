import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggPushLeftIcon],svg[gg-push-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.288 11v2H7.802l3.243 3.243l-1.414 1.414L3.974 12L9.63 6.343l1.414 1.414L7.802 11zM3 18V6H1v12z"></svg:path>`,
})
export class GgPushLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
