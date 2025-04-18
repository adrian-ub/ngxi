import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsEdit1OutlineIcon],svg[teenyicons-edit-1-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m.5 9.5l-.354-.354L0 9.293V9.5zm9-9l.354-.354a.5.5 0 0 0-.708 0zm5 5l.354.354a.5.5 0 0 0 0-.708zm-9 9v.5h.207l.147-.146zm-5 0H0a.5.5 0 0 0 .5.5zm.354-4.646l9-9l-.708-.708l-9 9zm8.292-9l5 5l.708-.708l-5-5zm5 4.292l-9 9l.708.708l9-9zM5.5 14h-5v1h5zm-4.5.5v-5H0v5zM6.146 3.854l5 5l.708-.708l-5-5zM8 15h7v-1H8z"></svg:path>`,
})
export class TeenyiconsEdit1OutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
