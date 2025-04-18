import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsGoTop16Icon],svg[qlementine-icons-go-top-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 0a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1zm4 15a.5.5 0 0 1-.5-.5V4.71L2.85 8.86a.5.5 0 0 1-.707-.707l5-5a.5.5 0 0 1 .707 0l5 5a.5.5 0 0 1-.707.707l-4.15-4.15v9.79a.5.5 0 0 1-.5.5z"></svg:path>`,
})
export class QlementineIconsGoTop16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
