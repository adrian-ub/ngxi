import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonThumbsUpFilledIcon],svg[carbon-thumbs-up-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 16h5v14H2zm21 14H9V15.197l3.042-4.563l.845-5.917A2.01 2.01 0 0 1 14.868 3H15a3.003 3.003 0 0 1 3 3v6h8a4.005 4.005 0 0 1 4 4v7a7.01 7.01 0 0 1-7 7"></svg:path>`,
})
export class CarbonThumbsUpFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
