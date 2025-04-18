import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsMail16Icon],svg[qlementine-icons-mail-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 4v8c0 1.1.895 2 2 2h12c1.1 0 2-.895 2-2V4c0-1.1-.895-2-2-2H2C.9 2 0 2.895 0 4m1 8V4.88l6.74 4.05a.5.5 0 0 0 .515 0l6.74-4.05V12a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1zm13-9a1 1 0 0 1 .964.733l-6.96 4.18l-6.96-4.18A1 1 0 0 1 2.008 3h12z" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsMail16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
