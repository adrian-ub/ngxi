import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsEditOutlineIcon],svg[teenyicons-edit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m.5 10.5l-.354-.354l-.146.147v.207zm10-10l.354-.354a.5.5 0 0 0-.708 0zm4 4l.354.354a.5.5 0 0 0 0-.708zm-10 10v.5h.207l.147-.146zm-4 0H0a.5.5 0 0 0 .5.5zm.354-3.646l10-10l-.708-.708l-10 10zm9.292-10l4 4l.708-.708l-4-4zm4 3.292l-10 10l.708.708l10-10zM4.5 14h-4v1h4zm-3.5.5v-4H0v4z"></svg:path>`,
})
export class TeenyiconsEditOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
