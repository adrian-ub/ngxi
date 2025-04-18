import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSignCrossSquareIcon],svg[streamline-sign-cross-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.688 1.594a1 1 0 0 1 1-1H12.28a1 1 0 0 1 1 1v10.594a1 1 0 0 1-1 1H1.687a1 1 0 0 1-1-1V1.594Z"></svg:path><svg:path d="M6.188 3.563a.5.5 0 0 0-.5.5v1.406H4.28a.5.5 0 0 0-.5.5v1.625a.5.5 0 0 0 .5.5h1.407V9.5a.5.5 0 0 0 .5.5h1.625a.5.5 0 0 0 .5-.5V8.094h1.406a.5.5 0 0 0 .5-.5V5.969a.5.5 0 0 0-.5-.5H8.313V4.062a.5.5 0 0 0-.5-.5z"></svg:path></svg:g>`,
})
export class StreamlineSignCrossSquareIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
