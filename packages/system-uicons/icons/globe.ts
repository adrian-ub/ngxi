import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsGlobeIcon],svg[system-uicons-globe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10 19c4.438 0 8-3.526 8-7.964S14.438 3 10 3s-8 3.598-8 8.036S5.562 19 10 19M3 8h14M3 14h14"></svg:path><svg:path d="M10 19c2.219 0 4-3.526 4-7.964S12.219 3 10 3s-4 3.598-4 8.036S7.781 19 10 19"></svg:path></svg:g>`,
})
export class SystemUiconsGlobeIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
