import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSigmaSolidIcon],svg[streamline-sigma-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.418 2.268C-.366 1.48.184.126 1.305.126h11.9a.744.744 0 1 1 0 1.489H1.87l4.843 4.86c.29.29.29.76 0 1.05l-4.843 4.86h11.337a.744.744 0 1 1 0 1.49h-11.9c-1.122 0-1.672-1.355-.888-2.142L5.134 7z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSigmaSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
