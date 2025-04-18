import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsChevronRightCircleIcon],svg[system-uicons-chevron-right-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(2 2)"><svg:circle cx="8.5" cy="8.5" r="8"></svg:circle><svg:path d="m7.5 11.5l3-3l-3.068-3"></svg:path></svg:g>`,
})
export class SystemUiconsChevronRightCircleIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
