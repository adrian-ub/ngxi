import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidShrimpIcon],svg[icon-park-solid-shrimp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSShrimp0"><svg:g fill="none"><svg:path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20.623 11H39s0 5-3 8s-6 4-7 4s-10.5 1-13 3s-3.999 5.5 0 9s11 5 16 3s8-8 8-8l4 10s-8 3-15 4s-14 0-20-6s-7.001-13.5-2-20c4.166-5.416 10.414-6.666 12.382-6.933A9 9 0 0 1 20.623 11"></svg:path><svg:path stroke="#fff" stroke-width="4" d="m26 23l-6-12"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M18 4h14a7 7 0 0 1 7 7v0"></svg:path><svg:circle cx="30" cy="16" r="2" fill="#000"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSShrimp0)"></svg:path>`,
})
export class IconParkSolidShrimpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
