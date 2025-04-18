import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsGoBottom16Icon],svg[qlementine-icons-go-bottom-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 1a.5.5 0 0 1 .5.5v9.79l4.15-4.15a.5.5 0 0 1 .707.707l-5 5a.5.5 0 0 1-.707 0l-5-5a.5.5 0 0 1 .707-.707l4.15 4.15V1.5a.5.5 0 0 1 .5-.5zm-4 14a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class QlementineIconsGoBottom16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
