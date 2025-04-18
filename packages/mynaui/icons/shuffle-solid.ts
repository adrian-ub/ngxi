import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiShuffleSolidIcon],svg[mynaui-shuffle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14.75 4a.75.75 0 0 1 .75-.75h4.412a.75.75 0 0 1 .75.75v4.444a.75.75 0 0 1-.75.75l-2.017-2.029L4.53 20.53a.75.75 0 0 1-1.06-1.06L16.839 6.1z"></svg:path><svg:path d="M3.47 3.47a.75.75 0 0 0 0 1.06l6 6a.75.75 0 1 0 1.06-1.06l-6-6a.75.75 0 0 0-1.06 0m10.002 9.998a.75.75 0 0 1 1.06.004l3.36 3.385L20 14.75a.75.75 0 0 1 .75.75V20a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75l2.082-2.082l-3.364-3.39a.75.75 0 0 1 .004-1.06"></svg:path></svg:g>`,
})
export class MynauiShuffleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
