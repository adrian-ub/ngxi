import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsShirtSolidIcon],svg[rivet-icons-shirt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.447 1.106L5 .882l-5 2.5V9h3v6h10V9h3V3.382l-5-2.5l-.447.224c-1.719.859-3.387.859-5.106 0"></svg:path>`,
})
export class RivetIconsShirtSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
