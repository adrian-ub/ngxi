import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconPivotColumn24Icon],svg[octicon-pivot-column-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3.75C2 2.783 2.783 2 3.75 2h16.5c.966 0 1.75.783 1.75 1.75V10a.75.75 0 0 1-1.5 0V8.75H8.75V20.5H10a.75.75 0 0 1 0 1.5H3.75A1.75 1.75 0 0 1 2 20.25Zm6.75-.25v3.75H20.5v-3.5a.25.25 0 0 0-.25-.25Zm-1.5 17V8.75H3.5v11.5c0 .138.112.25.25.25ZM3.5 7.25h3.75V3.5h-3.5a.25.25 0 0 0-.25.25Z"></svg:path><svg:path fill="currentColor" d="M21.25 12.312a.75.75 0 0 1 .75.75v2.626a3.75 3.75 0 0 1-3.75 3.75h-3.502l2.032 2.032a.749.749 0 1 1-1.06 1.06l-3.25-3.25a.75.75 0 0 1 0-1.06l3.25-3.25a.749.749 0 1 1 1.06 1.06l-1.907 1.908h3.377a2.25 2.25 0 0 0 2.25-2.25v-2.626a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class OcticonPivotColumn24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
