import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSteollerIcon],svg[icon-park-steoller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M40 24H12L14.5 34H36L40 24Z"></svg:path><svg:path d="M12 24L8 15H3.5"></svg:path><svg:circle cx="20" cy="41" r="3" fill="#2F88FF"></svg:circle><svg:circle cx="31" cy="41" r="3" fill="#2F88FF"></svg:circle><svg:path fill="#2F88FF" d="M23 8.0002L28 24.0002H40C40 24.0002 43.5 16.0002 37.5 10.0002C31.5 4.00022 25.6667 6.66686 23 8.0002Z"></svg:path></svg:g>`,
})
export class IconParkSteollerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
