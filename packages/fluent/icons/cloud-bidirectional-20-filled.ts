import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCloudBidirectional20FilledIcon],svg[fluent-cloud-bidirectional-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2c2.817 0 4.415 1.923 4.647 4.246h.07C16.532 6.246 18 7.758 18 9.623S16.53 13 14.718 13H11v-2.085a1.5 1.5 0 0 0 1.56-2.476l-2-2a1.5 1.5 0 0 0-2.12 0l-2 2A1.5 1.5 0 0 0 8 10.915V13H5.282C3.469 13 2 11.488 2 9.623C2 7.82 3.373 6.347 5.102 6.251l.251-.005C5.587 3.908 7.183 2 10 2m1.854 7.854a.5.5 0 0 1-.708 0L10 8.707v7.586l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L9 16.293V8.707L7.854 9.854a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708"></svg:path>`,
})
export class FluentCloudBidirectional20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
