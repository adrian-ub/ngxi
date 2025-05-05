import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconWarningIcon],svg[picon-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6V5H3v1m1-2V2H3v2M0 7V6l3-6h1l3 6v1"></svg:path>`,
})
export class PiconWarningIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
