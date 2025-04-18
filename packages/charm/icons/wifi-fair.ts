import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmWifiFairIcon],svg[charm-wifi-fair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M1.75 4.75L8 13.25l6.25-8.5C11 2 5 2 1.75 4.75"></svg:path><svg:path d="M4.25 8c2-1.75 5.5-1.75 7.5 0"></svg:path></svg:g>`,
})
export class CharmWifiFairIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
