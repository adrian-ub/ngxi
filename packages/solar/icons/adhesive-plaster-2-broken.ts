import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarAdhesivePlaster2BrokenIcon],svg[solar-adhesive-plaster-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12.765 20.416a5.41 5.41 0 1 0 7.65-7.651m-7.65 7.65l7.65-7.65m-7.65 7.65l-4.59-4.59m-4.59-4.59a5.41 5.41 0 0 1 7.65-7.65m-7.65 7.65l7.65-7.65m-7.65 7.65L5 12.65m15.416.115L19 11.35m-7.765-7.766l4.59 4.59"></svg:path><svg:circle cx="9.172" cy="12" r="1" fill="currentColor" transform="rotate(-45 9.172 12)"></svg:circle><svg:circle cx="12" cy="14.829" r="1" fill="currentColor" transform="rotate(-45 12 14.829)"></svg:circle><svg:circle cx="12" cy="9.171" r="1" fill="currentColor" transform="rotate(-45 12 9.171)"></svg:circle><svg:circle cx="14.829" cy="12" r="1" fill="currentColor" transform="rotate(-45 14.829 12)"></svg:circle></svg:g>`,
})
export class SolarAdhesivePlaster2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
