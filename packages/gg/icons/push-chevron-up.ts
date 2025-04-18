import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggPushChevronUpIcon],svg[gg-push-chevron-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5 16.929l1.414 1.414l5.657-5.657l5.657 5.657l1.414-1.414l-7.07-7.071zM19 8H5V6h14z"></svg:path>`,
})
export class GgPushChevronUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
