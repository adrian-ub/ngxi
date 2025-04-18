import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChatWarning16RegularIcon],svg[fluent-chat-warning-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.75 10.75a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0m-.258-5.84A.5.5 0 0 0 7.5 5v3.5l.008.09A.5.5 0 0 0 8.5 8.5V5zM8 2a6 6 0 0 0-5.27 8.872l-.71 2.49a.5.5 0 0 0 .638.612l2.338-.779A6 6 0 1 0 8 2M3 8a5 5 0 1 1 2.325 4.225a.5.5 0 0 0-.426-.052l-1.658.553l.51-1.781a.5.5 0 0 0-.052-.393A5 5 0 0 1 3 8"></svg:path>`,
})
export class FluentChatWarning16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
