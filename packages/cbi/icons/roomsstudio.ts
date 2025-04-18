import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiRoomsstudioIcon],svg[cbi-roomsstudio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 6a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8V4a1 1 0 1 1 2 0v2zm-3.905 15l3.771 6.498a1 1 0 0 1-1.731 1.004L18.782 21H17v6.95a1 1 0 1 1-2 0V21h-1.782l-4.352 7.502a1.003 1.003 0 0 1-1.368.363a1 1 0 0 1-.363-1.367L10.906 21H9a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2z"></svg:path>`,
})
export class CbiRoomsstudioIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
