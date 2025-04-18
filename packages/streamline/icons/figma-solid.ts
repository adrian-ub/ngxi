import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFigmaSolidIcon],svg[streamline-figma-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.502 5.06a1.962 1.962 0 0 0 .03 3.925h1.963V5.061H4.502Zm5.505 0a1.962 1.962 0 1 1-.098 0zM10.23.179a1.691 1.691 0 0 1 0 3.383H7.995V.178h2.234ZM2.57 1.87c0-.934.758-1.692 1.692-1.692h2.233v3.383H4.262A1.69 1.69 0 0 1 2.57 1.87m1.692 8.616a1.691 1.691 0 0 0 0 3.383h.27a1.963 1.963 0 0 0 1.963-1.963v-1.42z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineFigmaSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
