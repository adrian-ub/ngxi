import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRoyalCaninIcon],svg[arcticons-royal-canin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.316 32.026C32.938 29.05 27.065 28.125 24 28.125s-8.938.926-12.316 3.9m23.245 2.633c-3.378-2.974-7.864-3.438-10.928-3.438s-7.552.31-10.93 3.284"></svg:path><svg:circle cx="24" cy="23.008" r="2.578" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="15.919" r="2.578" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="30.965" cy="23.901" r="2.578" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="33.006" cy="17.112" r="2.578" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="37.463" cy="26.617" r="2.578" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="40.922" cy="20.43" r="2.578" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="17.035" cy="23.901" r="2.578" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="14.994" cy="17.112" r="2.578" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="10.537" cy="26.617" r="2.578" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="7.078" cy="20.43" r="2.578" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsRoyalCaninIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
