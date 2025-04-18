import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCornersInFillIcon],svg[ph-corners-in-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 96V48a8 8 0 0 1 13.66-5.66l48 48A8 8 0 0 1 208 104h-48a8 8 0 0 1-8-8m-56 56H48a8 8 0 0 0-5.66 13.66l48 48A8 8 0 0 0 104 208v-48a8 8 0 0 0-8-8m3.06-111.39a8 8 0 0 0-8.72 1.73l-48 48A8 8 0 0 0 48 104h48a8 8 0 0 0 8-8V48a8 8 0 0 0-4.94-7.39M208 152h-48a8 8 0 0 0-8 8v48a8 8 0 0 0 13.66 5.66l48-48A8 8 0 0 0 208 152"></svg:path>`,
})
export class PhCornersInFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
