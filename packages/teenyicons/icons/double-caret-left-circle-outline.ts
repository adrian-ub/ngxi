import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsDoubleCaretLeftCircleOutlineIcon],svg[teenyicons-double-caret-left-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.146 9.854l.354.353l.707-.707l-.353-.354zM4.5 7.5l-.354-.354l-.353.354l.353.354zm2.354-1.646l.353-.354l-.707-.707l-.354.353zm2.292 4l.354.353l.707-.707l-.353-.354zM7.5 7.5l-.354-.354l-.353.354l.353.354zm2.354-1.646l.353-.354l-.707-.707l-.354.353zm-3 3.292l-2-2l-.708.708l2 2zm-2-1.292l2-2l-.708-.708l-2 2zm5 1.292l-2-2l-.708.708l2 2zm-2-1.292l2-2l-.708-.708l-2 2zM7.5 15A7.5 7.5 0 0 0 15 7.5h-1A6.5 6.5 0 0 1 7.5 14zM0 7.5A7.5 7.5 0 0 0 7.5 15v-1A6.5 6.5 0 0 1 1 7.5zM7.5 0A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1zm0 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0z"></svg:path>`,
})
export class TeenyiconsDoubleCaretLeftCircleOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
