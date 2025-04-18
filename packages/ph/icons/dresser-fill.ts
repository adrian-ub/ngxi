import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phDresserFillIcon],svg[ph-dresser-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 24H56a16 16 0 0 0-16 16v40a4 4 0 0 0 4 4h168a4 4 0 0 0 4-4V40a16 16 0 0 0-16-16m-64 40h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m76 36H44a4 4 0 0 0-4 4v48a4 4 0 0 0 4 4h168a4 4 0 0 0 4-4v-48a4 4 0 0 0-4-4m-76 36h-15.73a8.18 8.18 0 0 1-8.25-7.47a8 8 0 0 1 8-8.53h15.73a8.18 8.18 0 0 1 8.25 7.47a8 8 0 0 1-8 8.53m76 36H44a4 4 0 0 0-4 4v40a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-40a4 4 0 0 0-4-4m-76 36h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhDresserFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
