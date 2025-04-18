import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsCursorIcon],svg[proicons-cursor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" d="M8.084 20.276c-1.06 1.38-3.264.66-3.306-1.079L4.443 5.392C4.407 3.932 6 3.012 7.247 3.773l11.788 7.192c1.485.906 1.006 3.176-.719 3.403l-5.581.738a1.84 1.84 0 0 0-1.221.705z"></svg:path>`,
})
export class ProiconsCursorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
