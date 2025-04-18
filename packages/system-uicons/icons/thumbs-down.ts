import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsThumbsDownIcon],svg[system-uicons-thumbs-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.643 4.243L10.499 5.5h-4v7h2L11.3 18q.87 0 1.485-.615T13.4 15.9l-.9-2.4l4.031-1.344a2 2 0 0 0 1.309-2.38l-.069-.22l-1.553-4.142a2 2 0 0 0-2.575-1.17"></svg:path><svg:path d="M3.5 13.5h2a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1"></svg:path></svg:g>`,
})
export class SystemUiconsThumbsDownIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
