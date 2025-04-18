import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMailRead16FilledIcon],svg[fluent-mail-read-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.732 1.078a.5.5 0 0 1 .536 0l4.806 3.058a2 2 0 0 1 .843 1.118L8 8.432L2.086 5.244a2 2 0 0 1 .84-1.108zM2 6.334V11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6.344L8.237 9.44a.5.5 0 0 1-.474 0z"></svg:path>`,
})
export class FluentMailRead16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
