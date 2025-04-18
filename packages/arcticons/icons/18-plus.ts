import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons18PlusIcon],svg[arcticons-18-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.5 20.179l2.625-1.429v10.5M22.228 24a2.625 2.625 0 0 0-2.625 2.625v0a2.625 2.625 0 0 0 2.625 2.625h1.706a2.625 2.625 0 0 0 2.625-2.625v0A2.625 2.625 0 0 0 23.934 24m0 0a2.625 2.625 0 0 0 2.625-2.625v0a2.625 2.625 0 0 0-2.625-2.625h-1.706a2.625 2.625 0 0 0-2.625 2.625v0A2.625 2.625 0 0 0 22.228 24m0 0h1.706m5.316 0h5.25m-2.625-2.625v5.25"></svg:path>`,
})
export class Arcticons18PlusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
