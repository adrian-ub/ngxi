import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidCheeseIcon],svg[icon-park-solid-cheese-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSCheese0"><svg:g fill="none"><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M43 20c0-2.172-18.108-11.888-22.866-14.404a1.97 1.97 0 0 0-2.149.201L5 16"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 17.652c0-1.329 1.269-2.298 2.555-1.964c6.407 1.662 23.305 5.645 32.606 4.07c1.395-.235 2.839.779 2.839 2.193v16.151a2 2 0 0 1-1.895 1.998l-34 1.79A2 2 0 0 1 5 39.891z"></svg:path><svg:circle cx="12" cy="25" r="2" fill="#000"></svg:circle><svg:circle cx="25" cy="27" r="2" fill="#000"></svg:circle><svg:circle cx="34" cy="32" r="2" fill="#000"></svg:circle><svg:circle cx="18" cy="32" r="2" fill="#000" stroke="#000" stroke-width="2"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSCheese0)"></svg:path>`,
})
export class IconParkSolidCheeseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
