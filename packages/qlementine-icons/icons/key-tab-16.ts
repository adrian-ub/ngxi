import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsKeyTab16Icon],svg[qlementine-icons-key-tab-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.85.853L3.7 3.003h11.8a.5.5 0 0 1 0 1H3.7l2.15 2.15a.5.5 0 0 1-.707.707l-3-3a.5.5 0 0 1 0-.707l3-3A.5.5 0 0 1 5.85.86zM1 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0zm9.1 9.35L12.25 12H.45a.5.5 0 0 0 0 1h11.8l-2.15 2.15a.5.5 0 0 0 .707.707l3-3a.5.5 0 0 0 0-.707l-3-3a.5.5 0 0 0-.707.707zM16 9.5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"></svg:path>`,
})
export class QlementineIconsKeyTab16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
