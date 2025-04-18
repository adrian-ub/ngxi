import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPercentDuotoneIcon],svg[ph-percent-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M95.8 56.2a28 28 0 1 1-39.6 0a28 28 0 0 1 39.6 0m104 104a28 28 0 1 0 0 39.6a28 28 0 0 0 0-39.6" opacity=".2"></svg:path><svg:path d="m205.66 61.64l-144 144a8 8 0 0 1-11.32-11.32l144-144a8 8 0 0 1 11.32 11.31Zm-155.12 39.8a36 36 0 0 1 50.92-50.91a36 36 0 0 1-50.92 50.91M56 76a20 20 0 1 0 34.14-14.16A20 20 0 0 0 56 76m160 104a36 36 0 1 1-10.54-25.46A35.76 35.76 0 0 1 216 180m-16 0a20 20 0 1 0-5.86 14.14A19.87 19.87 0 0 0 200 180"></svg:path></svg:g>`,
})
export class PhPercentDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
