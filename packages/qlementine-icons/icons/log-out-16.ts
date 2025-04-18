import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsLogOut16Icon],svg[qlementine-icons-log-out-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1c1.1 0 2 .895 2 2v9c0 1.1-.895 2-2 2H9.5a.5.5 0 0 1 0-1H12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H9.5a.5.5 0 0 1 0-1z"></svg:path><svg:path fill="currentColor" d="M4.15 4.15a.5.5 0 0 1 .707.707l-2.15 2.15h6.79a.5.5 0 0 1 0 1h-6.79l2.15 2.15a.5.5 0 0 1-.707.707l-3-3a.5.5 0 0 1 0-.707l3-3z"></svg:path>`,
})
export class QlementineIconsLogOut16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
