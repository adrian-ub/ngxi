import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTachiyomisyIcon],svg[arcticons-tachiyomisy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.576 34.543a8.81 8.81 0 0 0 7.391 3.326h4.435a7.413 7.413 0 0 0 7.392-7.392h0a7.413 7.413 0 0 0-7.392-7.391h-4.804a7.413 7.413 0 0 1-7.391-7.391h0a7.413 7.413 0 0 1 7.39-7.392h4.436c3.326 0 5.543.74 7.39 3.326"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.919 4.5L24.244 24L11.081 4.5m13.163 39V24"></svg:path>`,
})
export class ArcticonsTachiyomisyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
