import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhShoeboxIcon],svg[whh-shoebox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992.268 192h-960q-13 0-22.5-9.5T.268 160V32q0-13 9.5-22.5t22.5-9.5h960q13 0 22.5 9.5t9.5 22.5v128q0 13-9.5 22.5t-22.5 9.5m-896 64h832q13 0 22.5 9.5t9.5 22.5v448q0 13-9.5 22.5t-22.5 9.5h-832q-13 0-22.5-9.5t-9.5-22.5V288q0-13 9.5-22.5t22.5-9.5m224 352q0 13 9.5 22.5t22.5 9.5h320q13 0 22.5-9.5t9.5-22.5V416q0-13-9.5-22.5t-22.5-9.5h-320q-13 0-22.5 9.5t-9.5 22.5z"></svg:path>`,
})
export class WhhShoeboxIcon {
  readonly viewBox = input("0 0 1025 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
