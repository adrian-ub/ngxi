import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonInstanceMxIcon],svg[carbon-instance-mx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 5h-2l-2 3.897L16 5h-2l2.905 5L14 15h2l2-3.799L20 15h2l-2.902-5zM10 2L8.485 6.374L8 8l-.465-1.626L6 2H4v13h2V7.374l-.159-1.996l.58 1.996L8 12l1.579-4.626l.58-2l-.159 2V15h2V2z"></svg:path><svg:circle cx="9" cy="27" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M2 18h4v2H2zm6 0h4v2H8zm6 0h4v2h-4zm6 0h4v2h-4zm6 0h4v2h-4zm0 13H6a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2M6 25v4h20v-4z"></svg:path>`,
})
export class CarbonInstanceMxIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
