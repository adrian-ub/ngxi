import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsSpeedAltIcon],svg[lets-icons-speed-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.53 18.257a9 9 0 1 1 12.94 0a.15.15 0 0 1-.212 0l-4.03-4.03a.156.156 0 0 0-.215-.002A3 3 0 0 1 12 15a3 3 0 0 1-2.013-.775a.156.156 0 0 0-.214.002l-4.03 4.03a.15.15 0 0 1-.212 0m11.985-8.4a1 1 0 0 0-1.03-1.714l-5 3a1 1 0 0 0 1.03 1.714z" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsSpeedAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
