import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMailUnread32FilledIcon],svg[fluent-mail-unread-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 10a4 4 0 1 0 0-8a4 4 0 0 0 0 8m-5.5-4c0 2.73 1.99 4.996 4.599 5.427L16 16.864L3.48 10.123l-1.476-.82A4.5 4.5 0 0 1 6.5 5h15.09q-.09.487-.09 1M2 11.588V22.5A4.5 4.5 0 0 0 6.5 27h19a4.5 4.5 0 0 0 4.5-4.5V11.588l-.526.293l-13 7a1 1 0 0 1-.948 0L2.514 11.874z"></svg:path>`,
})
export class FluentMailUnread32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
