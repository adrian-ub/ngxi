import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasStatusClosedIcon],svg[pajamas-status-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.536 8.657l2.828-2.83a1 1 0 0 1 1.414 1.416l-3.535 3.535a1 1 0 0 1-1.415.001l-2.12-2.12a1 1 0 1 1 1.413-1.415zM8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16m0-2A6 6 0 1 0 8 2a6 6 0 0 0 0 12"></svg:path>`,
})
export class PajamasStatusClosedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
