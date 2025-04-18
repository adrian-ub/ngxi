import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsServiceBell1Icon],svg[lineicons-service-bell-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.25 7.532V6H10a.75.75 0 0 1 0-1.5h4A.75.75 0 0 1 14 6h-1.25v1.532a8.75 8.75 0 0 1 8 8.718V18h.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5h.5v-1.75a8.75 8.75 0 0 1 8-8.718M4.75 18h14.5v-1.75a7.25 7.25 0 1 0-14.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsServiceBell1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
