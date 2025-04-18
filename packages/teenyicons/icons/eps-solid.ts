import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsEpsSolidIcon],svg[teenyicons-eps-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 8h1V7H7z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M1 1.5A1.5 1.5 0 0 1 2.5 0h8.207L14 3.293V13.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 13.5zM5 6H2v5h3v-1H3V9h2V8H3V7h2zm1 0h3v3H7v2H6zm4 0h3v1h-2v1h2v3h-3v-1h2V9h-2z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsEpsSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
