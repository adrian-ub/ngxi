import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsRewindCircleOutlineIcon],svg[teenyicons-rewind-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 5.5H7a.5.5 0 0 0-.748-.434zm0 4l-.248.434A.5.5 0 0 0 7 9.5zM3 7.5l-.248-.434a.5.5 0 0 0 0 .868zm7.5-2h.5a.5.5 0 0 0-.748-.434zm0 4l-.248.434A.5.5 0 0 0 11 9.5zM7 7.5l-.248-.434a.5.5 0 0 0 0 .868zm.5 7.5A7.5 7.5 0 0 0 15 7.5h-1A6.5 6.5 0 0 1 7.5 14zM0 7.5A7.5 7.5 0 0 0 7.5 15v-1A6.5 6.5 0 0 1 1 7.5zM7.5 0A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1zm0 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zM6 5.5v4h1v-4zm.748 3.566l-3.5-2l-.496.868l3.5 2zm-3.5-1.132l3.5-2l-.496-.868l-3.5 2zM10 5.5v4h1v-4zm.748 3.566l-3.5-2l-.496.868l3.5 2zm-3.5-1.132l3.5-2l-.496-.868l-3.5 2z"></svg:path>`,
})
export class TeenyiconsRewindCircleOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
