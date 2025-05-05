import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconKotlinIcon],svg[picon-kotlin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1 8l3-3l3 3M0 5V1h4M0 8V6l5-5h2"></svg:path>`,
})
export class PiconKotlinIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
