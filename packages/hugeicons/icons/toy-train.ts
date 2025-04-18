import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsToyTrainIcon],svg[hugeicons-toy-train-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="7" cy="18" r="2"></svg:circle><svg:circle cx="17" cy="18" r="2"></svg:circle><svg:path d="M2 4h11M6 8h2m7 4.5h.5M3 4v12c0 .465 0 .698.051.888a1.5 1.5 0 0 0 1.06 1.06C4.304 18 4.536 18 5 18m7 0V4M9 18h6m-3-8h4.86c1.364 0 1.694.27 1.962 1.608c.097.486.015.858.52.898c.84.068 1.432.633 1.749 1.373C21.546 14.94 22 15.832 22 17c0 .471 0 .707-.146.854C21.707 18 21.47 18 21 18h-2m-3-8V7m0 0h-1m1 0h1"></svg:path></svg:g>`,
})
export class HugeiconsToyTrainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
