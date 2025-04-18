import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarAdhesivePlaster2LinearIcon],svg[solar-adhesive-plaster-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m12.765 20.416l-9.18-9.181m9.18 9.18a5.41 5.41 0 1 0 7.65-7.65m-7.65 7.65l7.65-7.65m0 0l-9.18-9.18m0 0a5.41 5.41 0 0 0-7.65 7.65m7.65-7.65l-7.65 7.65"></svg:path><svg:circle cx="9.172" cy="12" r="1" fill="currentColor" transform="rotate(-45 9.172 12)"></svg:circle><svg:circle cx="12" cy="14.829" r="1" fill="currentColor" transform="rotate(-45 12 14.829)"></svg:circle><svg:circle cx="12" cy="9.171" r="1" fill="currentColor" transform="rotate(-45 12 9.171)"></svg:circle><svg:circle cx="14.828" cy="12" r="1" fill="currentColor" transform="rotate(-45 14.828 12)"></svg:circle></svg:g>`,
})
export class SolarAdhesivePlaster2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
