import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faBrandsAutoprefixerIcon],svg[fa-brands-autoprefixer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m318.4 16l-161 480h77.5l25.4-81.4h119.5L405 496h77.5zm-40.3 341.9l41.2-130.4h1.5l40.9 130.4zM640 405l-10-31.4L462.1 358l19.4 56.5zm-462.1-47L10 373.7L0 405l158.5 9.4z"></svg:path>`,
})
export class FaBrandsAutoprefixerIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}
