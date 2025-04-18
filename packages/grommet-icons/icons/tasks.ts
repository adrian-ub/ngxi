import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsTasksIcon],svg[grommet-icons-tasks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M1 3h22v4H1zm0 7h22v4H1zm0 7h22v4H1zM1 4h15v2H1zm0 7h5v2H1zm0 7h10v2H1z"></svg:path>`,
})
export class GrommetIconsTasksIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
