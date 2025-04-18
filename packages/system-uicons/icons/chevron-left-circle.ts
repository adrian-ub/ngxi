import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsChevronLeftCircleIcon],svg[system-uicons-chevron-left-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(2 2)"><svg:circle cx="8.5" cy="8.5" r="8"></svg:circle><svg:path d="m9.55 11.4l-3-2.9l3-3"></svg:path></svg:g>`,
})
export class SystemUiconsChevronLeftCircleIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
