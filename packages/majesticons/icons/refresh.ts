import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsRefreshIcon],svg[majesticons-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M17.217 5.333a1 1 0 1 1-1.49 1.334A5 5 0 0 0 7 10h2a1 1 0 0 1 .707 1.707l-3 3a1 1 0 0 1-1.414 0l-3-3A1 1 0 0 1 3 10h2a7 7 0 0 1 12.217-4.667zm4.49 6.96A1 1 0 0 1 21 14h-2v.002a7 7 0 0 1-12.217 4.665a1 1 0 1 1 1.49-1.334A5 5 0 0 0 17 14h-2a1 1 0 0 1-.707-1.707l3-3a1 1 0 0 1 1.414 0l3 3z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsRefreshIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
