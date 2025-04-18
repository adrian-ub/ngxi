import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCodeStringIcon],svg[mdi-code-string-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm9.5 6h-1A1.5 1.5 0 0 1 10 9.5A1.5 1.5 0 0 1 11.5 8h1A1.5 1.5 0 0 1 14 9.5h2A3.5 3.5 0 0 0 12.5 6h-1A3.5 3.5 0 0 0 8 9.5a3.5 3.5 0 0 0 3.5 3.5h1a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5H8a3.5 3.5 0 0 0 3.5 3.5h1a3.5 3.5 0 0 0 3.5-3.5a3.5 3.5 0 0 0-3.5-3.5"></svg:path>`,
})
export class MdiCodeStringIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
