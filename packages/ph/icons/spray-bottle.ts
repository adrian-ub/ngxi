import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSprayBottleIcon],svg[ph-spray-bottle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 80a8 8 0 0 0 8-8a56.06 56.06 0 0 0-56-56H80a16 16 0 0 0-16 16v48a24 24 0 0 1-24 24a8 8 0 0 0 0 16a40 40 0 0 0 40-40h32v24.62a23.87 23.87 0 0 1-9 18.74l-16 12.79a39.79 39.79 0 0 0-15 31.23V224a16 16 0 0 0 16 16h104a16 16 0 0 0 16-16v-12.53A270.9 270.9 0 0 0 174 80ZM80 32h72a40.08 40.08 0 0 1 39.2 32H80Zm112 179.47V224H88v-56.62a23.87 23.87 0 0 1 9-18.74l16-12.79a39.79 39.79 0 0 0 15-31.23V80h27.52A254.86 254.86 0 0 1 192 211.47"></svg:path>`,
})
export class PhSprayBottleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
