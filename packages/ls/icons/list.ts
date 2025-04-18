import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsListIcon],svg[ls-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M129 118c0-36-28-64-64-64S0 82 0 118s29 65 65 65s64-29 64-65m75 53h564V67H204zm-75 176c0-36-28-65-64-65S0 311 0 347s29 64 65 64s64-28 64-64m75 52h564V295H204zm-75 176c0-36-28-64-64-64S0 539 0 575s29 65 65 65s64-29 64-65m75 51h564V523H204z"></svg:path>`,
})
export class LsListIcon {
  readonly viewBox = input("0 0 768 640")
  readonly width = input("1.2em")
  readonly height = input("1em")
}
