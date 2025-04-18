import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7PauseRectangleFillIcon],svg[f7-pause-rectangle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.715 49.574h40.57c4.899 0 7.36-2.437 7.36-7.265V13.69c0-4.828-2.461-7.265-7.36-7.265H7.715C2.84 6.426.355 8.84.355 13.69v28.62c0 4.851 2.485 7.265 7.36 7.265m13.781-11.953c-1.476 0-2.344-1.031-2.344-2.414V20.91c0-1.383.867-2.414 2.344-2.414h1.5c1.36 0 2.25 1.031 2.25 2.414v14.297c0 1.383-.89 2.414-2.25 2.414Zm11.625 0c-1.477 0-2.367-1.031-2.367-2.414V20.91c0-1.383.89-2.414 2.367-2.414h1.5c1.36 0 2.203 1.031 2.203 2.414v14.297c0 1.383-.844 2.414-2.203 2.414Z"></svg:path>`,
})
export class F7PauseRectangleFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
