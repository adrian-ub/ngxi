import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineShield1SolidIcon],svg[streamline-shield-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 4.927a9.4 9.4 0 0 1-6.635 8.984a1.24 1.24 0 0 1-.73 0A9.4 9.4 0 0 1 0 4.927V1.5A1.5 1.5 0 0 1 1.5 0h11A1.5 1.5 0 0 1 14 1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineShield1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
