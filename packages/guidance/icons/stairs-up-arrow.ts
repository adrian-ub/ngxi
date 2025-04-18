import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceStairsUpArrowIcon],svg[guidance-stairs-up-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M8.5 24v-.149a7.5 7.5 0 0 0-1.894-4.982l-.106-.12v-.25h7v-.648a7.5 7.5 0 0 0-1.894-4.982l-.106-.12v-.25h7v-.648a7.5 7.5 0 0 0-1.894-4.982l-.106-.12V6.5H24M10.5.5l-10 10m10-10c-.398.398-1.133.654-1.79.812c-.878.212-1.79.25-2.687.149c-.697-.08-1.464-.235-1.773-.544M10.5.5c-.398.398-.654 1.133-.812 1.79a7.8 7.8 0 0 0-.149 2.687c.08.697.235 1.464.545 1.773"></svg:path>`,
})
export class GuidanceStairsUpArrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
