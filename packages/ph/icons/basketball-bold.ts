import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBasketballBoldIcon],svg[ph-basketball-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20M60 177.28A83.6 83.6 0 0 1 44.87 140h30.27A83.1 83.1 0 0 1 60 177.28M44.87 116A83.6 83.6 0 0 1 60 78.72A83.1 83.1 0 0 1 75.14 116ZM116 211.13a83.63 83.63 0 0 1-39-16.46A106.94 106.94 0 0 0 99.34 140H116Zm0-95.13H99.34A106.94 106.94 0 0 0 77 61.33a83.63 83.63 0 0 1 39-16.46Zm80-37.28A83.6 83.6 0 0 1 211.13 116h-30.27A83.1 83.1 0 0 1 196 78.72m-56 132.41V140h16.66A106.94 106.94 0 0 0 179 194.67a83.63 83.63 0 0 1-39 16.46M156.66 116H140V44.87a83.63 83.63 0 0 1 39 16.46A106.94 106.94 0 0 0 156.66 116M196 177.28A83.1 83.1 0 0 1 180.86 140h30.27A83.6 83.6 0 0 1 196 177.28"></svg:path>`,
})
export class PhBasketballBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
