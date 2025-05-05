import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconChampagneIcon],svg[picon-champagne-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8h4L4.5 7L4 0l-.5 7M2 0c0 7 4 7 4 0"></svg:path>`,
})
export class PiconChampagneIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
