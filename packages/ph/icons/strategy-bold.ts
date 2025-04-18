import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phStrategyBoldIcon],svg[ph-strategy-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 144a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 56a16 16 0 1 1 16-16a16 16 0 0 1-16 16m-32-72a12 12 0 0 1-8.49-20.49L51 96L39.51 84.49a12 12 0 0 1 17-17L68 79l11.51-11.49a12 12 0 0 1 17 17L85 96l11.52 11.51a12 12 0 0 1-17 17L68 113l-11.51 11.49A12 12 0 0 1 48 128m184.49 75.51a12 12 0 0 1-17 17L204 209l-11.51 11.52a12 12 0 0 1-17-17L187 192l-11.52-11.51a12 12 0 0 1 17-17L204 175l11.51-11.52a12 12 0 0 1 17 17L221 192Zm-43.4-92.62c-5.21 23-23.33 43.53-45.09 51.22a12 12 0 1 1-8-22.63c14.07-5 26.27-18.91 29.67-33.9c2.37-10.46.4-20.84-5.68-30.54v9a12 12 0 0 1-24 0V44a12 12 0 0 1 12-12h40a12 12 0 0 1 0 24H176c12.77 16.61 17.42 35.76 13.09 54.89"></svg:path>`,
})
export class PhStrategyBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
