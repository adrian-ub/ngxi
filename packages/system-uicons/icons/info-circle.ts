import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsInfoCircleIcon],svg[system-uicons-info-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" transform="translate(2 2)"><svg:g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="8.5" cy="8.5" r="8"></svg:circle><svg:path d="M8.5 12.5v-4h-1m0 4h2"></svg:path></svg:g><svg:circle cx="8.5" cy="5.5" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SystemUiconsInfoCircleIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
