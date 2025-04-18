import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextAlignDistributedVertical20RegularIcon],svg[fluent-text-align-distributed-vertical-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.854 4.854a.5.5 0 0 1-.708 0L16 3.707V17.5a.5.5 0 1 1-1 0V3.707l-1.146 1.147a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708m-15 10.293a.5.5 0 1 0-.708.707l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 1 0-.708-.707L5 16.293V2.5a.5.5 0 0 0-1 0v13.793zM10 18a.5.5 0 0 1-.5-.5v-15a.5.5 0 0 1 1 0v15a.5.5 0 0 1-.5.5"></svg:path>`,
})
export class FluentTextAlignDistributedVertical20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
