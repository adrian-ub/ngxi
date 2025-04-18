import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCicsProgramIcon],svg[carbon-cics-program-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.17 19l-2.59 2.59L19 23l4-4l-4-4l-1.42 1.41zm-8.34 0l2.59-2.59L13 15l-4 4l4 4l1.42-1.41z"></svg:path><svg:circle cx="9" cy="8" r="1" fill="currentColor"></svg:circle><svg:circle cx="6" cy="8" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M28 4H4c-1.103 0-2 .898-2 2v20c0 1.103.897 2 2 2h24c1.103 0 2-.897 2-2V6c0-1.102-.897-2-2-2m0 2v4H4V6zM4 26V12h24v14z"></svg:path>`,
})
export class CarbonCicsProgramIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
