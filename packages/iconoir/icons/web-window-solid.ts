import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirWebWindowSolidIcon],svg[iconoir-web-window-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.222 3.25c-1.661 0-2.972 1.38-2.972 3.036v11.428c0 1.657 1.31 3.036 2.972 3.036h15.556c1.661 0 2.972-1.38 2.972-3.036V6.286c0-1.657-1.31-3.036-2.972-3.036zm.778 3a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirWebWindowSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
