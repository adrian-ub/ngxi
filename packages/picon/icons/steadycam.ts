import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconSteadycamIcon],svg[picon-steadycam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 4l2-1v4L6 6M0 7V1h5v1H1v1h4v4M1 5h3V4H1"></svg:path>`,
})
export class PiconSteadycamIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
