import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiVisBarHorizontalIcon],svg[oui-vis-bar-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 10h-6a.5.5 0 0 1 0-1H8V6H2.5a.5.5 0 0 1 0-1H13V2H2.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H9v3h2.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-9a.5.5 0 1 1 0-1H11v-3zM0 .5a.5.5 0 1 1 1 0v14a.5.5 0 1 1-1 0z"></svg:path>`,
})
export class OuiVisBarHorizontalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
