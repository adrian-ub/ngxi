import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilKeySolidIcon],svg[basil-key-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 12a5.75 5.75 0 0 1 10.8-2.75H21c.966 0 1.75.784 1.75 1.75v2.5a.75.75 0 0 1-.75.75h-2.25V16a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1-.75-.75v-1.75h-3.457A5.751 5.751 0 0 1 1.25 12M7 10a2 2 0 1 0 0 4a2 2 0 0 0 0-4" clip-rule="evenodd"></svg:path>`,
})
export class BasilKeySolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
