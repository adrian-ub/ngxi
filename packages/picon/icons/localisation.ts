import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconLocalisationIcon],svg[picon-localisation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5V3h2v2M2 2v4h4V2M0 4l4-4l4 4l-4 4"></svg:path>`,
})
export class PiconLocalisationIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
