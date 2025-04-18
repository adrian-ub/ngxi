import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMoustacheSolidIcon],svg[streamline-moustache-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 8.39a3.77 3.77 0 0 0 6.919-1.163c.076-.36-.304-.606-.655-.497a5.6 5.6 0 0 1-1.418.25c-1.077 0-.624-2.607-2.154-3.113A2.52 2.52 0 0 0 7 4.826a2.52 2.52 0 0 0-2.692-.959C2.778 4.373 3.23 6.98 2.154 6.98a5.6 5.6 0 0 1-1.418-.25c-.35-.11-.73.137-.655.497A3.77 3.77 0 0 0 7 8.39"></svg:path>`,
})
export class StreamlineMoustacheSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
