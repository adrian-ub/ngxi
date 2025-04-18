import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayMagicIcon],svg[subway-magic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M349.1 0v116.4L116.4 349.1H0V512h162.9V395.6l232.7-232.7H512V0z"></svg:path>`,
})
export class SubwayMagicIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
