import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatFlashlightIcon],svg[fluent-emoji-flat-flashlight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#F9C23C" d="M14.14 2a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0zM5.58 4.13a.75.75 0 0 0-1.06 1.06L7.63 8.3a.75.75 0 1 0 1.06-1.06zm-4.33 9.01a.75.75 0 0 1 .75-.75h3.89a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m15.837-6.089c.831.832-.67 3.681-3.352 6.364s-5.532 4.183-6.364 3.352c-.832-.832.669-3.681 3.352-6.364s5.532-4.184 6.364-3.352"></svg:path><svg:path fill="#B4ACBC" d="m20.67 14.69l7.42 7.42c1.59 1.59 1.58 4.19-.03 5.8s-4.21 1.62-5.8.03l-7.55-7.55c-1.99.22-4.06-.42-5.58-1.95l3.69-5.94l5.94-3.69a6.78 6.78 0 0 1 1.91 5.88"></svg:path><svg:path fill="#321B41" d="m7.06 17.72l.86.86c.35.35.93.35 1.28 0l9.7-9.7c.35-.35.35-.93 0-1.28l-.86-.85a.91.91 0 0 0-1.28 0l-9.7 9.7a.9.9 0 0 0 0 1.27"></svg:path><svg:path fill="#F4F4F4" d="m18.23 19.09l1.21 1.21c.31.31.83.31 1.14 0l.03-.03c.31-.31.31-.83 0-1.14l-1.21-1.21a.815.815 0 0 0-1.14 0l-.03.03c-.32.31-.32.82 0 1.14"></svg:path></svg:g>`,
})
export class FluentEmojiFlatFlashlightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
