import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggAlignRightIcon],svg[gg-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path fill-opacity=".5" d="m16 13.004l-6-.013l-.01 4l6 .013z"></svg:path><svg:path d="m19.978 18.002l.026-12l-2-.004l-.026 12zM3.996 10.985l12 .026l.009-4l-12-.026z"></svg:path></svg:g>`,
})
export class GgAlignRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
