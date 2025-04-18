import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsInfoCircleIcon],svg[pepicons-info-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9 10a1 1 0 0 1 2 0v4a1 1 0 1 1-2 0v-4Z"></svg:path><svg:circle cx="10" cy="7" r="1"></svg:circle><svg:path fill-rule="evenodd" d="M2 10a8 8 0 1 0 16 0a8 8 0 0 0-16 0Zm14 0a6 6 0 1 1-12 0a6 6 0 0 1 12 0Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsInfoCircleIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
