import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFlaskFilledIcon],svg[tabler-flask-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2a1 1 0 0 1 0 2v4.826l3.932 10.814l.034.077a1.7 1.7 0 0 1-.002 1.193l-.07.162a1.7 1.7 0 0 1-1.213.911L17.5 22h-11l-.181-.017a1.7 1.7 0 0 1-1.285-2.266l.039-.09L9 8.823V4a1 1 0 1 1 0-2zm-2 2h-2v4h2z"></svg:path>`,
})
export class TablerFlaskFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
