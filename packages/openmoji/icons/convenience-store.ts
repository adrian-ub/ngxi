import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiConvenienceStoreIcon],svg[openmoji-convenience-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#E27022" d="M9 38h53v17H9z"></svg:path><svg:path fill="#92D3F5" d="M14 45h10v10H14zm14 0h10v10H28zm10 0h10v10H38zm10 0h10v10H48z"></svg:path><svg:ellipse cx="19" cy="37" fill="#FFF" rx="7" ry="5"></svg:ellipse><svg:g fill="none" stroke="#000" stroke-miterlimit="10"><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M26 38h36v17H9V38h3"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 45h10v10H14zm5 10V45m9 0h10v10H28zm10 0h10v10H38zm10 0h10v10H48z"></svg:path><svg:ellipse cx="19" cy="37" stroke-width="2" rx="7" ry="5"></svg:ellipse><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width=".857" d="M16.577 35.99a.92.92 0 0 1 .903-.737h0a.92.92 0 0 1 .651.27c.26.26.236.69-.008.965l-1.565 1.765h1.843m2.377-3l-1.115 2.521h1.755m-.289-.929v1.408"></svg:path></svg:g>`,
})
export class OpenmojiConvenienceStoreIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
