import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentImageCircle24RegularIcon],svg[fluent-image-circle-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3.5a8.5 8.5 0 0 0-6.51 13.965l4.934-4.843a2.25 2.25 0 0 1 3.152 0l4.935 4.843A8.5 8.5 0 0 0 12 3.5m5.449 15.024l-4.924-4.831a.75.75 0 0 0-1.05 0L6.55 18.524A8.47 8.47 0 0 0 12 20.5a8.47 8.47 0 0 0 5.449-1.976M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m13.25-2.5a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5m0 1.5a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5"></svg:path>`,
})
export class FluentImageCircle24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
