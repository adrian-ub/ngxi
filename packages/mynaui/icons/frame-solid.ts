import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiFrameSolidIcon],svg[mynaui-frame-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.35 3a.75.75 0 0 0-1.5 0v2.85H3a.75.75 0 0 0 0 1.5h2.85v9.3H3a.75.75 0 0 0 0 1.5h2.85V21a.75.75 0 0 0 1.5 0v-2.85h9.3V21a.75.75 0 0 0 1.5 0v-2.85H21a.75.75 0 0 0 0-1.5h-2.85v-9.3H21a.75.75 0 0 0 0-1.5h-2.85V3a.75.75 0 0 0-1.5 0v2.85h-9.3z"></svg:path>`,
})
export class MynauiFrameSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
