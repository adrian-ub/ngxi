import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsZoomCancelIcon],svg[system-uicons-zoom-cancel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 3)"><svg:circle cx="5.5" cy="5.5" r="5"></svg:circle><svg:path d="m7.5 7.5l-4-4zm-4 0l4-4zm11 7L9.076 9.076"></svg:path></svg:g>`,
})
export class SystemUiconsZoomCancelIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
