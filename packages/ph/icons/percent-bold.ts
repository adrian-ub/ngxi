import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPercentBoldIcon],svg[ph-percent-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m208.49 64.47l-144 144a12 12 0 1 1-17-17l144-144a12 12 0 0 1 17 17m-160.77 39.8A40 40 0 1 1 76 116a39.72 39.72 0 0 1-28.28-11.73M60 76a16 16 0 1 0 4.69-11.31A15.87 15.87 0 0 0 60 76m160 104a40 40 0 1 1-11.72-28.29A39.7 39.7 0 0 1 220 180m-24 0a15.87 15.87 0 0 0-4.69-11.32A16 16 0 1 0 196 180"></svg:path>`,
})
export class PhPercentBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
