import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSend28RegularIcon],svg[fluent-send-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.043 4.076c-.275-1.03.783-1.91 1.746-1.451l21.498 10.249c.949.452.949 1.804 0 2.256L3.788 25.38c-.963.458-2.021-.422-1.746-1.452L4.7 14.002zm4.008 10.676l-2.418 9.04l20.535-9.79l-20.535-9.79l2.418 9.04H17.25a.75.75 0 0 1 0 1.5z"></svg:path>`,
})
export class FluentSend28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
