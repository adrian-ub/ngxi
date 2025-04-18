import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phComputerTowerBoldIcon],svg[ph-computer-tower-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M84 76a12 12 0 0 1 12-12h64a12 12 0 0 1 0 24H96a12 12 0 0 1-12-12m12 52h64a12 12 0 0 0 0-24H96a12 12 0 0 0 0 24m116-88v176a20 20 0 0 1-20 20H64a20 20 0 0 1-20-20V40a20 20 0 0 1 20-20h128a20 20 0 0 1 20 20m-24 4H68v168h120Zm-60 124a16 16 0 1 0 16 16a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhComputerTowerBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
