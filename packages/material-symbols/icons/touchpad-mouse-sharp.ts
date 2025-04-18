import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTouchpadMouseSharpIcon],svg[material-symbols-touchpad-mouse-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 22q-2.275 0-3.887-1.612T11 16.5V15h11v1.5q0 2.275-1.6 3.888T16.5 22M2 20V4h20v4.4q-1.075-1.15-2.5-1.775T16.5 6q-3.125 0-5.312 2.188T9 13.5v3q0 .925.213 1.813T9.85 20zm9-7q.075-1.875 1.35-3.238t3.15-1.687V13zm6.5 0V8.075q1.875.325 3.15 1.688T22 13z"></svg:path>`,
})
export class MaterialSymbolsTouchpadMouseSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
