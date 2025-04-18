import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faBrandsInstalodIcon],svg[fa-brands-instalod-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M153.384 480h233.729l115.441-204.235l-298.325 57.446Zm351.342-239.922L387.113 32H155.669L360.23 267.9ZM124.386 48.809L7.274 256l115.962 205.154l102.391-295.593Z"></svg:path>`,
})
export class FaBrandsInstalodIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
