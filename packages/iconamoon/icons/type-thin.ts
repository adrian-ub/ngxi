import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonTypeThinIcon],svg[iconamoon-type-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 7V6a2 2 0 0 1 2-2h5m7 3V6a2 2 0 0 0-2-2h-5m0 0v16m0 0H9m3 0h3"></svg:path>`,
})
export class IconamoonTypeThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
