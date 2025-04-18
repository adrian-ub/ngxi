import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPhoneEraser20FilledIcon],svg[fluent-phone-eraser-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.578 1.44a1.5 1.5 0 0 1 2.12 0l1.864 1.86a1.5 1.5 0 0 1 0 2.122l-5.138 5.138a1.5 1.5 0 0 1-2.122 0L9.44 8.699a1.5 1.5 0 0 1 0-2.122zm-4.431 5.845a.5.5 0 0 0 0 .707l1.861 1.862a.5.5 0 0 0 .708 0l1.29-1.29l-2.57-2.57zM12.6 2.003L12.5 2h-7A1.5 1.5 0 0 0 4 3.5v13A1.5 1.5 0 0 0 5.5 18h7a1.5 1.5 0 0 0 1.5-1.5v-5.11a2.5 2.5 0 0 1-3.405-.122L8.733 9.406a2.5 2.5 0 0 1 0-3.536zM10.5 14.5a.5.5 0 0 1-.5.5H8a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5"></svg:path>`,
})
export class FluentPhoneEraser20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
