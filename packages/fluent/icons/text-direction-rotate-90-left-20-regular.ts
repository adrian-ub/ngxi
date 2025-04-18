import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextDirectionRotate90Left20RegularIcon],svg[fluent-text-direction-rotate-90-left-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 13.5a.5.5 0 0 1-.324.468l-8 3a.5.5 0 1 1-.351-.936L11 15.028v-3.057l-2.675-1.003a.5.5 0 1 1 .35-.936l8 3A.5.5 0 0 1 17 13.5m-1.924 0L12 12.346v2.307zM5 16.5a.5.5 0 1 0 1 0V4.707l1.146 1.146a.5.5 0 0 0 .708-.707l-2-2A.5.5 0 0 0 5.503 3h-.006a.5.5 0 0 0-.35.146l-2 2a.5.5 0 1 0 .707.707L5 4.707zm8-7a.5.5 0 0 0 1 0V4.707l1.146 1.146a.5.5 0 0 0 .708-.707l-2-2a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 .708.707L13 4.707z"></svg:path>`,
})
export class FluentTextDirectionRotate90Left20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
