import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSofa03Icon],svg[hugeicons-sofa-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7 16v3m10-3v3m4-9.732a2 2 0 0 0-2.733.732l-1.009 2.39c-.25.591-.278.61-.921.61H7.663c-.643 0-.67-.018-.921-.61L5.732 10a2 2 0 0 0-3.464 2c.431.747 1.627.684 1.82 1.265c.44 1.32.66 1.98 1.184 2.357S6.492 16 7.883 16h8.234c1.391 0 2.087 0 2.61-.378c.525-.377.745-1.037 1.185-2.357c.193-.581 1.389-.518 1.82-1.265A2 2 0 0 0 21 9.268"></svg:path><svg:path d="m4.5 9l.04-.107C5.246 7.01 5.6 6.068 6.37 5.534C7.141 5 8.147 5 10.158 5h3.684c2.011 0 3.017 0 3.788.534s1.124 1.476 1.83 3.36L19.5 9"></svg:path></svg:g>`,
})
export class HugeiconsSofa03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
