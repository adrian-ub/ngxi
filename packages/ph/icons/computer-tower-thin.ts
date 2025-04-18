import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phComputerTowerThinIcon],svg[ph-computer-tower-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 72a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4m-4 28H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8m44-60v176a12 12 0 0 1-12 12H64a12 12 0 0 1-12-12V40a12 12 0 0 1 12-12h128a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H64a4 4 0 0 0-4 4v176a4 4 0 0 0 4 4h128a4 4 0 0 0 4-4Zm-68 132a8 8 0 1 0 8 8a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhComputerTowerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
