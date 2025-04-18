import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsZoomOutIcon],svg[system-uicons-zoom-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 3)"><svg:circle cx="5.5" cy="5.5" r="5"></svg:circle><svg:path d="M7.5 5.5h-4zm7.071 9l-5.45-5.381"></svg:path></svg:g>`,
})
export class SystemUiconsZoomOutIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
