import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiFineTuneSolidIcon],svg[mynaui-fine-tune-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.25 8.5a.75.75 0 0 1 .75-.75h11a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1-.75-.75m-7 7a.75.75 0 0 1 .75-.75h11a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75M5 5.75a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5m14 7a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5"></svg:path>`,
})
export class MynauiFineTuneSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
