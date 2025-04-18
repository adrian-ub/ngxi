import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasForkIcon],svg[pajamas-fork-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.5 3.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-.25 2.386a2.501 2.501 0 1 0-1.5 0v.364a2.5 2.5 0 0 0 2.5 2.5a1 1 0 0 1 1 1v.364a2.501 2.501 0 1 0 1.5 0V9.75a1 1 0 0 1 1-1a2.5 2.5 0 0 0 2.5-2.5v-.364a2.501 2.501 0 1 0-1.5 0v.364a1 1 0 0 1-1 1c-.681 0-1.3.273-1.75.715a2.5 2.5 0 0 0-1.75-.715a1 1 0 0 1-1-1zM11.5 4.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-3.5 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class PajamasForkIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
