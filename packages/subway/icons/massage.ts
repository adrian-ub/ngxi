import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayMassageIcon],svg[subway-massage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 59.1v393.8h512V59.1zm433.2 39.4L256 275.7L78.8 98.5zm39.4 315H39.4V118.2L256 334.8l216.6-216.6z"></svg:path>`,
})
export class SubwayMassageIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
