import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsPills2OutlineIcon],svg[healthicons-pills-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M20.304 15.308a1 1 0 0 0-.762-1.85l-7.846 3.234a1 1 0 0 0 .762 1.85z"></svg:path><svg:path fill-rule="evenodd" d="M26 16c0 5.523-4.477 10-10 10S6 21.523 6 16S10.477 6 16 6s10 4.477 10 10m-2 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0" clip-rule="evenodd"></svg:path><svg:path d="M35.91 33.925a1 1 0 1 0 .449-1.949l-8.27-1.901a1 1 0 1 0-.448 1.949z"></svg:path><svg:path fill-rule="evenodd" d="M32 42c5.523 0 10-4.477 10-10s-4.477-10-10-10s-10 4.477-10 10s4.477 10 10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPills2OutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
