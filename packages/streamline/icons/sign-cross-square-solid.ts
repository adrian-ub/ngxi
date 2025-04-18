import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSignCrossSquareSolidIcon],svg[streamline-sign-cross-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.188 1.594a1.5 1.5 0 0 1 1.5-1.5H12.28a1.5 1.5 0 0 1 1.5 1.5v10.594a1.5 1.5 0 0 1-1.5 1.5H1.687a1.5 1.5 0 0 1-1.5-1.5V1.594Zm5.5 2.468a.5.5 0 0 1 .5-.5h1.625a.5.5 0 0 1 .5.5V5.47h1.406a.5.5 0 0 1 .5.5v1.625a.5.5 0 0 1-.5.5H8.313V9.5a.5.5 0 0 1-.5.5H6.188a.5.5 0 0 1-.5-.5V8.094H4.28a.5.5 0 0 1-.5-.5V5.969a.5.5 0 0 1 .5-.5h1.407z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSignCrossSquareSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
