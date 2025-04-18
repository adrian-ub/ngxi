import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiVisBarVerticalIcon],svg[oui-vis-bar-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 7.5v6a.5.5 0 1 1-1 0V8H6v5.5a.5.5 0 1 1-1 0V3H2v10.5a.5.5 0 1 1-1 0v-11a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5V7h3V4.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v9a.5.5 0 1 1-1 0V5h-3zM.5 16a.5.5 0 1 1 0-1h14a.5.5 0 1 1 0 1z"></svg:path>`,
})
export class OuiVisBarVerticalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
