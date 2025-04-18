import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarHeartBrokenLineDuotoneIcon],svg[solar-heart-broken-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2 9.137C2 14 6.02 16.591 8.962 18.911C10 19.729 11 20.5 12 20.5s2-.77 3.038-1.59C17.981 16.592 22 14 22 9.138S16.5.825 12 5.501C7.5.825 2 4.274 2 9.137"></svg:path><svg:path d="m12 5.5l-1.5 3L14 11l-3 3.5l2 2l-1 4" opacity=".5"></svg:path></svg:g>`,
})
export class SolarHeartBrokenLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
