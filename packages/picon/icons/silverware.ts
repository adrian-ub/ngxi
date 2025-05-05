import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconSilverwareIcon],svg[picon-silverware-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 8V5Q4 1 8 0v8M3 3V0H2v3H1V0H0v4l2 1v3h1V5l2-1V0H4v3"></svg:path>`,
})
export class PiconSilverwareIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
