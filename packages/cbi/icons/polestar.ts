import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiPolestarIcon],svg[cbi-polestar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.905 12.177H2.529l-.354.353l6.212 1.27l1.573.322l.014.064L11.64 22l.265-.442ZM9.91 13.952l-7.421-1.516l.1-.105h8.935zm11.902-2.482l-7.87-1.592l-.013-.064L12.347 2l-.354.442v9.38h9.467l.367-.35zm-.414.2H12.37l1.623-1.619l7.51 1.519z"></svg:path>`,
})
export class CbiPolestarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
