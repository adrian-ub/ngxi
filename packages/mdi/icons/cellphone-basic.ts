import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCellphoneBasicIcon],svg[mdi-cellphone-basic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2a1 1 0 0 0-1 1v3h-4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h5c1.11 0 2-.89 2-2V8c0-.74-.4-1.38-1-1.72V3a1 1 0 0 0-1-1m-5 6h5v5h-5zm0 7h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1zm-4 2h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1zm-4 2h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1z"></svg:path>`,
})
export class MdiCellphoneBasicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
