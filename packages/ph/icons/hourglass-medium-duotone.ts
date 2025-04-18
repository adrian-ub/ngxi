import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phHourglassMediumDuotoneIcon],svg[ph-hourglass-medium-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M180.92 88L128 128L74.67 88Z" opacity=".2"></svg:path><svg:path d="M200 75.64V40a16 16 0 0 0-16-16H72a16 16 0 0 0-16 16v36a16.07 16.07 0 0 0 6.4 12.8l52.27 39.2l-52.27 39.2A16.07 16.07 0 0 0 56 180v36a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-35.64a16.09 16.09 0 0 0-6.35-12.77L141.27 128l52.38-39.59A16.09 16.09 0 0 0 200 75.64M72 40h112v35.64L178.23 80H77.33L72 76Zm56 78L98.67 96h58.4Zm56 98H72v-36l48-36v24a8 8 0 0 0 16 0v-23.92l48 36.28Z"></svg:path></svg:g>`,
})
export class PhHourglassMediumDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
