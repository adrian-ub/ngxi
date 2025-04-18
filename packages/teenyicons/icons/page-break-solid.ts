import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPageBreakSolidIcon],svg[teenyicons-page-break-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 1.5A1.5 1.5 0 0 1 2.5 0h8.207L14 3.293V8H1zM1 11h13v2.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 13.5zM0 8.993h3v1H0zm4 0h3v1H4zm7 0H8v1h3zm1 0h3v1h-3z"></svg:path>`,
})
export class TeenyiconsPageBreakSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
