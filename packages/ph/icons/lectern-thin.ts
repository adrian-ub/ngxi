import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLecternThinIcon],svg[ph-lectern-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m242.72 122.63l-40-80A11.93 11.93 0 0 0 192 36H64a11.93 11.93 0 0 0-10.73 6.63l-40 80A12 12 0 0 0 24 140h100v72H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8h-28v-72h100a12 12 0 0 0 10.73-17.37Zm-7.33 7.47A3.94 3.94 0 0 1 232 132H24a4 4 0 0 1-3.58-5.79l40-80A4 4 0 0 1 64 44h128a4 4 0 0 1 3.58 2.21l40 80a3.94 3.94 0 0 1-.19 3.89M188 104a4 4 0 0 1-4 4H72a4 4 0 0 1 0-8h112a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhLecternThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
