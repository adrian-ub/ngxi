import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirWebWindowXmarkSolidIcon],svg[iconoir-web-window-xmark-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 6.286c0-1.657 1.31-3.036 2.972-3.036h15.556c1.661 0 2.972 1.38 2.972 3.036v11.428c0 1.657-1.31 3.036-2.972 3.036H4.222c-1.661 0-2.972-1.38-2.972-3.036zm3 .714A.75.75 0 0 1 5 6.25h1a.75.75 0 0 1 0 1.5H5A.75.75 0 0 1 4.25 7m6.28 2.47a.75.75 0 1 0-1.06 1.06L10.94 12l-1.47 1.47a.75.75 0 1 0 1.06 1.06L12 13.06l1.47 1.47a.75.75 0 1 0 1.06-1.06L13.06 12l1.47-1.47a.75.75 0 1 0-1.06-1.06L12 10.94z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirWebWindowXmarkSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
