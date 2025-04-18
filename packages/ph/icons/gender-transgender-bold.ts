import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGenderTransgenderBoldIcon],svg[ph-gender-transgender-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 28h-44a12 12 0 0 0 0 24h15l-19 19l-15.51-15.48a12 12 0 0 0-17 17L151 88l-10.42 10.46a76 76 0 1 0 17 17L168 105l15.51 15.52a12 12 0 0 0 17-17L185 88l19-19v15a12 12 0 0 0 24 0V40a12 12 0 0 0-12-12m-83.23 168.8A52 52 0 1 1 148 160a52.05 52.05 0 0 1-15.23 36.8"></svg:path>`,
})
export class PhGenderTransgenderBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
