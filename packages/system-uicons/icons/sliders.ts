import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsSlidersIcon],svg[system-uicons-sliders-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M14.5 9V2.5m0 16V14"></svg:path><svg:circle cx="14.5" cy="11.5" r="2.5"></svg:circle><svg:path d="M6.5 5V2.5m0 16V10"></svg:path><svg:circle cx="6.5" cy="7.5" r="2.5"></svg:circle></svg:g>`,
})
export class SystemUiconsSlidersIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
