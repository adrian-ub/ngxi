import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsReuseIcon],svg[flat-color-icons-reuse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#455A64" d="M12.1 42h5.1l-.7-23.8l-5.6 2z"></svg:path><svg:circle cx="36.5" cy="10" r="5" fill="#FFB74D"></svg:circle><svg:path fill="#607D8B" d="M11 42H6l1.8-23.4l6.4 2.3z"></svg:path><svg:path fill="#607D8B" d="M31.7 15.9c-.6-2-1.3-4-2.5-5.8c-1.3-1.6-3.2-3.1-6.1-2c-3.1 1.3-9.2 3.6-11.2 4.5c-2.3 1.1-4.1 2.7-4.1 5.9c0 3.4 4.3 5.3 4.3 5.3l14.7-6.1l1.7 4.5l5.3.1c0 .1-1.5-4.4-2.1-6.4"></svg:path><svg:path fill="#B39DDB" d="M37.9 42H30c-1 0-1.8-.7-2-1.7l-2.6-17.1h17l-2.6 17.1c0 1-.9 1.7-1.9 1.7"></svg:path><svg:path fill="#7E57C2" d="M42 24H26c-.6 0-1-.4-1-1s.4-1 1-1h16c.6 0 1 .4 1 1s-.4 1-1 1"></svg:path>`,
})
export class FlatColorIconsReuseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
