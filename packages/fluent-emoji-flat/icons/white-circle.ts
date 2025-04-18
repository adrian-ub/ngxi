import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatWhiteCircleIcon],svg[fluent-emoji-flat-white-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#9B9B9B" d="M16.055 1.5c-8.008 0-14.5 6.492-14.5 14.5s6.492 14.5 14.5 14.5c8.009 0 14.5-6.492 14.5-14.5s-6.491-14.5-14.5-14.5"></svg:path><svg:path fill="#fff" d="M2.556 16c0-7.456 6.044-13.5 13.5-13.5c7.455 0 13.5 6.044 13.5 13.5s-6.045 13.5-13.5 13.5c-7.456 0-13.5-6.044-13.5-13.5"></svg:path></svg:g>`,
})
export class FluentEmojiFlatWhiteCircleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
