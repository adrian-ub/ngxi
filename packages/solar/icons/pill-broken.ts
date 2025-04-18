import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarPillBrokenIcon],svg[solar-pill-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M2.6 6a6.796 6.796 0 0 1 11.002-2.01l6.407 6.408A6.77 6.77 0 0 1 21.894 14M2.107 10a6.77 6.77 0 0 0 1.884 3.602l6.407 6.407A6.796 6.796 0 0 0 21.4 18"></svg:path><svg:path d="M16.806 7.194s-.541 2.806-3.674 5.939s-5.938 3.673-5.938 3.673"></svg:path></svg:g>`,
})
export class SolarPillBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
