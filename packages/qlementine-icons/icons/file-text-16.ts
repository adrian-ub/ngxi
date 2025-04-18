import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsFileText16Icon],svg[qlementine-icons-file-text-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2 3c0-1.1.895-2 2-2h5.5c.133 0 .26.053.354.146l4 4A.5.5 0 0 1 14 5.5V13c0 1.1-.895 2-2 2H4c-1.1 0-2-.895-2-2zm2-1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6H9.5a.5.5 0 0 1-.5-.5V2zm6 .707l2.29 2.29H10z" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsFileText16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
