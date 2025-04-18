import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsZoomInIcon],svg[system-uicons-zoom-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 3)"><svg:circle cx="5.5" cy="5.5" r="5"></svg:circle><svg:path d="M7.5 5.5h-4zm-2 2v-4zm9 7L9.133 9.133"></svg:path></svg:g>`,
})
export class SystemUiconsZoomInIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
