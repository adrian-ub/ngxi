import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggPushDownIcon],svg[gg-push-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 1h2v14.485l3.243-3.242l1.414 1.414L12 19.314l-5.657-5.657l1.414-1.414L11 15.485zm7 19.288H6v2h12z"></svg:path>`,
})
export class GgPushDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
