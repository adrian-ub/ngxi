import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneBoosterCarSeatIcon],svg[icon-park-twotone-booster-car-seat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTBoosterCarSeat0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M32 15H16c0 3.47-5.78 7.903-9.317 10.292C5.123 26.344 4 27 4 27s1 3 3.5 8c1.894 3.788 4.075 5.854 5.02 6.633c.306.25.69.367 1.085.367h21.693c.455 0 .894-.154 1.217-.474c.86-.852 2.672-2.9 4.485-6.526c2.5-5 3-8 3-8s-1.278-.639-3-1.709c-3.554-2.207-9-6.25-9-10.291"></svg:path><svg:path d="m32 15l2-9h8m-26 9l-2-9H6M4 27s2 4 8 4h24c5 0 8-4 8-4"></svg:path><svg:path d="M7.5 35C5 30 4 27 4 27s1.124-.655 2.683-1.709M41 35c2.5-5 3-8 3-8s-1.278-.639-3-1.709"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTBoosterCarSeat0)"></svg:path>`,
})
export class IconParkTwotoneBoosterCarSeatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
