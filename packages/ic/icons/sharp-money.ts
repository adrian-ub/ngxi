import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpMoneyIcon],svg[ic-sharp-money-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 16h5V8h-5zm2-6h1v4h-1zm-8 6h5V8H8zm2-6h1v4h-1zM5 8h2v8H5zM2 4v16h20V4zm18 14H4V6h16z"></svg:path>`,
})
export class IcSharpMoneyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
