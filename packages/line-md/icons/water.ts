import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdWaterIcon],svg[line-md-water-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-dasharray="20" stroke-dashoffset="20" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 5c0 0 5 6 5 9c0 2.76 -2.24 5 -5 5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></svg:animate></svg:path><svg:path d="M12 5c0 0 -5 6 -5 9c0 2.76 2.24 5 5 5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdWaterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
