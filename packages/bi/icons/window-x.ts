import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biWindowXIcon],svg[bi-window-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M2.5 5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1M4 5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m2-.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0"></svg:path><svg:path d="M0 4a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v4a.5.5 0 0 1-1 0V7H1v5a1 1 0 0 0 1 1h5.5a.5.5 0 0 1 0 1H2a2 2 0 0 1-2-2zm1 2h13V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z"></svg:path><svg:path d="M16 12.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m-4.854-1.354a.5.5 0 0 0 0 .708l.647.646l-.647.646a.5.5 0 0 0 .708.708l.646-.647l.646.647a.5.5 0 0 0 .708-.708l-.647-.646l.647-.646a.5.5 0 0 0-.708-.708l-.646.647l-.646-.647a.5.5 0 0 0-.708 0"></svg:path></svg:g>`,
})
export class BiWindowXIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
