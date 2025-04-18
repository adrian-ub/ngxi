import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiSkateboardIcon],svg[maki-skateboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.25 5.25V5h1.5v.25c0 .69.56 1.25 1.25 1.25h7c.69 0 1.25-.56 1.25-1.25V5h1.5v.25A2.75 2.75 0 0 1 11 8H4a2.75 2.75 0 0 1-2.75-2.75M5 10a1 1 0 1 1-2 0a1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class MakiSkateboardIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
