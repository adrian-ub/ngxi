import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[featherTruckIcon],svg[feather-truck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M1 3h15v13H1zm15 5h4l3 3v5h-7z"></svg:path><svg:circle cx="5.5" cy="18.5" r="2.5"></svg:circle><svg:circle cx="18.5" cy="18.5" r="2.5"></svg:circle></svg:g>`,
})
export class FeatherTruckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
