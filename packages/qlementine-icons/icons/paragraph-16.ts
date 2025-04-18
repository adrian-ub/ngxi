import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsParagraph16Icon],svg[qlementine-icons-paragraph-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 5c0-2.21 1.79-4 4-4h8.5a.5.5 0 0 1 0 1H13v12.5a.5.5 0 0 1-1 0V2H9v12.5a.5.5 0 0 1-1 0V9H6C3.79 9 2 7.21 2 5m6 3V2H6C4.34 2 3 3.34 3 5s1.34 3 3 3z" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsParagraph16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
