import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowFit24FilledIcon],svg[fluent-arrow-fit-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.182 7.519a1 1 0 0 1 .05 1.413L5.301 11H10a1 1 0 1 1 0 2H5.301l1.93 2.068a1 1 0 0 1-1.462 1.364L2.27 12.685A1 1 0 0 1 2 12a1 1 0 0 1 .27-.684l3.5-3.748a1 1 0 0 1 1.413-.049m9.636 0a1 1 0 0 0-.05 1.413L18.699 11H14a1 1 0 1 0 0 2h4.699l-1.93 2.068a1 1 0 0 0 1.462 1.364l3.498-3.747a1 1 0 0 0 .149-.205a1 1 0 0 0-.148-1.163l-3.499-3.75a1 1 0 0 0-1.413-.048"></svg:path>`,
})
export class FluentArrowFit24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
