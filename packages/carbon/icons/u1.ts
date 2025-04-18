import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonU1Icon],svg[carbon-u1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M13 23H9a2 2 0 0 1-2-2V9h2v12h4V9h2v12a2 2 0 0 1-2 2z" fill="currentColor"></svg:path><svg:path d="M22 21V9h-5v2h3v10h-3v2h8v-2h-3z" fill="currentColor"></svg:path>`,
})
export class CarbonU1Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
