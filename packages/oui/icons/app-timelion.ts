import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiAppTimelionIcon],svg[oui-app-timelion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4 4v20.34L16 32l12-7.64V4zm22 2v4h-4a3 3 0 0 0-3 3v5h-6v-5a3 3 0 0 0-3-3H6V6zm-7.87 14L16 22.52L13.87 20zM6 12h4a1 1 0 0 1 1 1v6.7l3.69 4.37l-2.58 3.06L6 23.24zm7.81 16.22l2.19-2.6l2.19 2.6L16 29.61zm6.08-1.09l-2.58-3.06L21 19.7V13a1 1 0 0 1 1-1h4v11.24z"></svg:path><svg:path d="M4 0h24v2H4z" class="ouiIcon__fillSecondary"></svg:path></svg:g>`,
})
export class OuiAppTimelionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
