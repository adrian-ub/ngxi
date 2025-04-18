import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPicnicTableThinIcon],svg[ph-picnic-table-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 132h-49.53l-32-64H192a4 4 0 0 0 0-8H64a4 4 0 0 0 0 8h25.53l-32 64H8a4 4 0 0 0 0 8h45.53l-25.11 50.21a4 4 0 0 0 1.79 5.37A4.1 4.1 0 0 0 32 196a4 4 0 0 0 3.58-2.21L62.47 140h131.06l26.89 53.79A4 4 0 0 0 224 196a4.1 4.1 0 0 0 1.79-.42a4 4 0 0 0 1.79-5.37L202.47 140H248a4 4 0 0 0 0-8m-181.53 0l32-64h59.06l32 64Z"></svg:path>`,
})
export class PhPicnicTableThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
