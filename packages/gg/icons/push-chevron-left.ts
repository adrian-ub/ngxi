import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggPushChevronLeftIcon],svg[gg-push-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.929 5l1.414 1.414l-5.657 5.657l5.657 5.657l-1.414 1.414l-7.071-7.07zM8 19V5H6v14z"></svg:path>`,
})
export class GgPushChevronLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
