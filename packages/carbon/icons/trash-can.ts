import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTrashCanIcon],svg[carbon-trash-can-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12h2v12h-2zm6 0h2v12h-2z"></svg:path><svg:path fill="currentColor" d="M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6zm4 22V8h16v20zm4-26h8v2h-8z"></svg:path>`,
})
export class CarbonTrashCanIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
