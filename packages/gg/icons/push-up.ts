import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggPushUpIcon],svg[gg-push-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 22.288h2V7.802l3.243 3.243l1.414-1.414L12 3.974L6.343 9.63l1.414 1.414L11 7.802zM18 3H6V1h12z" clip-rule="evenodd"></svg:path>`,
})
export class GgPushUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
