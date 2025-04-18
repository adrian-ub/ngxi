import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasUnderlineIcon],svg[pajamas-underline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.5 2.75a.75.75 0 0 0-1.5 0V7a4 4 0 1 0 8 0V2.75a.75.75 0 0 0-1.5 0V7a2.5 2.5 0 0 1-5 0zM3.75 12.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasUnderlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
