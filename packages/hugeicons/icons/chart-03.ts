import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsChart03Icon],svg[hugeicons-chart-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 21.072h12c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H8.999c-2.62 0-3.929 0-4.589-.66s-.66-1.97-.66-4.59v-10c0-.41-.34-.75-.75-.75s-.75.34-.75.75v10c0 3.03 0 4.55 1.1 5.65s2.62 1.1 5.649 1.1zm-3.53-6.22c.15.15.34.22.53.22s.38-.07.53-.22l3.25-3.25c.48-.48.83-.83 1.02-.88c.13-.04.26-.04.41 0c.18.05.53.4 1.01.88c.72.72 1.11 1.11 1.66 1.26c.41.12.84.12 1.23 0c.56-.15.95-.54 1.67-1.26l3.75-3.75c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0l-3.75 3.75l-.002.001c-.48.48-.829.83-1.019.88c-.13.04-.26.04-.41 0c-.18-.05-.529-.4-1.008-.88h-.002c-.72-.72-1.11-1.11-1.66-1.26c-.41-.12-.84-.12-1.23 0c-.56.15-.95.54-1.67 1.26l-3.25 3.25c-.29.29-.29.77 0 1.06" color="currentColor"></svg:path>`,
})
export class HugeiconsChart03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
