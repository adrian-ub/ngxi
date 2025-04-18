import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBirdThinIcon],svg[ph-bird-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 68a8 8 0 1 1-8-8a8 8 0 0 1 8 8m64 12a4 4 0 0 1-1.78 3.33L212 98.14V120a100.11 100.11 0 0 1-100 100H24a12 12 0 0 1-9.37-19.5L100 98.08V76.89c0-31.22 25-56.74 55.72-56.89h.28a55.94 55.94 0 0 1 53.79 40.39l24.43 16.28A4 4 0 0 1 236 80m-11.21 0l-20.68-13.78a4.08 4.08 0 0 1-1.65-2.33A48 48 0 0 0 156 28h-.24C129.43 28.13 108 50.06 108 76.89v22.63a4 4 0 0 1-.93 2.56L20.84 205.56A4 4 0 0 0 24 212h28.79l72.14-86.56a4 4 0 0 1 6.14 5.12L63.21 212H112a92.1 92.1 0 0 0 92-92V96a4 4 0 0 1 1.78-3.33Z"></svg:path>`,
})
export class PhBirdThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
