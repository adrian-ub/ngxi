import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciWaterDropIcon],svg[ci-water-drop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 13.385a4.68 4.68 0 0 1-1.318 3.263A4.5 4.5 0 0 1 13 17.736m6-4.044C19 7.115 12 2 12 2S5 7.115 5 13.692c0 1.938.737 3.797 2.05 5.168S10.144 21 12 21s3.637-.77 4.95-2.14S19 15.63 19 13.691"></svg:path>`,
})
export class CiWaterDropIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
