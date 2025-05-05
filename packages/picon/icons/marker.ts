import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconMarkerIcon],svg[picon-marker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3c1-4-7-4-6 0l3 5M3 3l1-1l1 1l-1 1"></svg:path>`,
})
export class PiconMarkerIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
