import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feBoltIcon],svg[fe-bolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18 2h-8L6 13h4l-2 9l9-13h-4.995z"></svg:path>`,
})
export class FeBoltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
