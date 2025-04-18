import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsGoFirst16Icon],svg[qlementine-icons-go-first-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 8.5a.5.5 0 0 1-.5.5H4.71l4.15 4.15a.5.5 0 0 1-.707.707l-5-5a.5.5 0 0 1 0-.707l5-5a.5.5 0 0 1 .707.707l-4.15 4.15h9.79a.5.5 0 0 1 .5.5zm-14-4a.5.5 0 0 0-1 0v8a.5.5 0 0 0 1 0z"></svg:path>`,
})
export class QlementineIconsGoFirst16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
