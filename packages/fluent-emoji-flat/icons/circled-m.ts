import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatCircledMIcon],svg[fluent-emoji-flat-circled-m-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#5092FF" d="M16 30c7.732 0 14-6.268 14-14S23.732 2 16 2S2 8.268 2 16s6.268 14 14 14"></svg:path><svg:path fill="#fff" d="M22.438 9.564c.488.225.8.713.8 1.25v10.76a1.375 1.375 0 1 1-2.75 0v-7.499a.125.125 0 0 0-.206-.095l-3.388 2.905a1.375 1.375 0 0 1-1.757.027l-3.422-2.756a.125.125 0 0 0-.203.098v7.32a1.375 1.375 0 1 1-2.75 0V11.12a1.375 1.375 0 0 1 2.237-1.071l4.892 3.939a.125.125 0 0 0 .16-.002l4.918-4.216c.407-.35.981-.43 1.469-.206"></svg:path></svg:g>`,
})
export class FluentEmojiFlatCircledMIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
