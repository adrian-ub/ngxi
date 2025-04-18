import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiNecktieIcon],svg[openmoji-necktie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#61b2e4" stroke="#61b2e4" stroke-miterlimit="10" stroke-width="2" d="M16.132 13.778a5.96 5.96 0 0 0-5.96 5.96v38.079a5.96 5.96 0 0 0 5.96 5.96H54.21a5.96 5.96 0 0 0 5.961-5.96V19.738a5.96 5.96 0 0 0-5.96-5.96h-3.164L40.696 7.964l-8.528-.227l-8.221 2.305l-4.03 3.735z"></svg:path><svg:path fill="#92d3f5" stroke="#92d3f5" stroke-miterlimit="10" stroke-width="2" d="M20.206 12.862S16.09 15.554 27.22 29.32l3.989-7.03l-6.824-8.414l-2.445-1.972m26.591-.536l-2.41 2.41l-7.173 8.52l4.661 7.033c11.13-13.765 6.048-16.379 6.048-16.379"></svg:path><svg:path fill="#8967aa" d="M36.679 31.62h-3.007l-4.026 32.158h11.05zm0-6.957h-3.007l-1.504 3.478l1.504 3.479h3.007l1.504-3.479z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M16.132 13.778a5.96 5.96 0 0 0-5.96 5.96v38.079a5.96 5.96 0 0 0 5.96 5.96H54.21a5.96 5.96 0 0 0 5.961-5.96V19.738a5.96 5.96 0 0 0-5.96-5.96"></svg:path><svg:path d="m24.384 13.875l7.824 8.414l-4.989 8.03c-11.13-13.764-7.318-17.541-7.318-17.541s14.378-13 30.614 0c0 0 3.81 3.776-7.318 17.541l-4.99-8.03l7.915-8.511M36.679 31.62h-3.007l-4.026 32.158h11.05z"></svg:path><svg:path d="M36.679 24.663h-3.007l-1.504 3.478l1.504 3.479h3.007l1.504-3.479z"></svg:path></svg:g>`,
})
export class OpenmojiNecktieIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
