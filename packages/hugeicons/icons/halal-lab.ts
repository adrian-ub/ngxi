import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHalalLabIcon],svg[hugeicons-halal-lab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 22.063h4c.41 0 .75-.34.75-.75c0-5.38-4.37-9.75-9.75-9.75c-1.49 0-2.93.34-4.25.98v-9.23c0-.41-.34-.75-.75-.75H3c-.41 0-.75.34-.75.75v18c0 .41.34.75.75.75h4c.41 0 .75-.34.75-.75a4.26 4.26 0 0 1 4.25-4.25a4.26 4.26 0 0 1 4.25 4.25c0 .41.34.75.75.75m3.21-1.5H17.7c-.37-2.82-2.79-5-5.7-5s-5.33 2.18-5.7 5H3.75v-16.5h2.49v9.77c0 .28.15.53.4.66c.24.13.54.11.77-.04a8.2 8.2 0 0 1 4.58-1.39c4.3 0 7.84 3.3 8.22 7.5m-8.96-17.25c0 5.38 4.37 9.75 9.75 9.75c.41 0 .75-.34.75-.75v-4c0-.41-.34-.75-.75-.75a4.26 4.26 0 0 1-4.25-4.25c0-.41-.34-.75-.75-.75h-4c-.41 0-.75.34-.75.75m9 8.22a8.27 8.27 0 0 1-7.47-7.47l.01.01h2.51c.33 2.57 2.38 4.61 4.95 4.95z" color="currentColor"></svg:path>`,
})
export class HugeiconsHalalLabIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
