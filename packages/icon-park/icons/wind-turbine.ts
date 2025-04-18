import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkWindTurbineIcon],svg[icon-park-wind-turbine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 30V44"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M29 23C40 28 45 37 45 37C45 37 33 37 24 29C15 37 3 37 3 37C3 37 8 27 19 23C19 10 24 4 24 4C24 4 29 10 29 23Z"></svg:path><svg:circle cx="24" cy="24" r="2" fill="#fff"></svg:circle></svg:g>`,
})
export class IconParkWindTurbineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
