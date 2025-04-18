import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdFilterIcon],svg[line-md-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-dasharray="56" stroke-dashoffset="56" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h14l-5 6.5v9.5l-4 -4v-5.5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path>`,
})
export class LineMdFilterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
