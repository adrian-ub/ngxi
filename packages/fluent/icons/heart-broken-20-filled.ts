import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHeartBroken20FilledIcon],svg[fluent-heart-broken-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.274 4.178a4.3 4.3 0 0 0-6.013.096c-1.688 1.705-1.68 4.476.016 6.189l6.277 6.34c.26.263.682.263.942 0l6.245-6.304a4.41 4.41 0 0 0-.017-6.187a4.305 4.305 0 0 0-6.135-.015l-.585.592l-1.344 2.06l2.996 2.53a.5.5 0 0 1 .031.735l-2 2a.5.5 0 1 1-.707-.707l1.615-1.616L7.678 7.43a.5.5 0 0 1-.097-.655z"></svg:path>`,
})
export class FluentHeartBroken20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
