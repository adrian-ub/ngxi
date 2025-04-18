import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMegaphoneLoud32FilledIcon],svg[fluent-megaphone-loud-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.725 5.988a1 1 0 0 1-.686-1.237l.827-2.884a1 1 0 1 1 1.922.551l-.826 2.884a1 1 0 0 1-1.237.686m7.982-2.695a1 1 0 0 1 0 1.414l-3 3a1 1 0 1 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0m-7.114 19.125l4.75-2.375a3 3 0 0 0 .779-4.804l-10.36-10.36a3 3 0 0 0-4.805.78l-8.64 17.279A3 3 0 0 0 3.88 26.4l1.72 1.72a3 3 0 0 0 3.463.562l2.717-1.359a5.5 5.5 0 0 0 9.813-4.906m-1.798.899a3.5 3.5 0 0 1-6.218 3.109zM27 10.002a1 1 0 0 0 0 2h3a1 1 0 1 0 0-2z"></svg:path>`,
})
export class FluentMegaphoneLoud32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
