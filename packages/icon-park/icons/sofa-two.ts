import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSofaTwoIcon],svg[icon-park-sofa-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M44 38V18H36V31H12V18H4V38H44Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M36 6H12L12 31H36L36 6Z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M10 44C12.2091 44 14 42.2091 14 40C12.9028 40.0044 6.7003 40 6 40C6 42.2091 7.79086 44 10 44Z" clip-rule="evenodd"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M38 44C40.2091 44 42 42.2091 42 40C40.0954 39.9934 34.8627 40 34 40C34 42.2091 35.7909 44 38 44Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkSofaTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
