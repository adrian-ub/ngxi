import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiVisBarVerticalStackedIcon],svg[oui-vis-bar-vertical-stacked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 15a.5.5 0 1 1 0 1H.5a.5.5 0 1 1 0-1zm-9-13a.5.5 0 0 1 .5.5L5.999 7H9V4.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v9a.5.5 0 1 1-1 0V7h-3v6.5a.5.5 0 0 1-.41.492L9.5 14a.5.5 0 0 1-.5-.5V10H6v3.5a.5.5 0 0 1-.992.09L5 13.5V6H2v7.5a.5.5 0 1 1-1 0v-11a.5.5 0 0 1 .5-.5z"></svg:path>`,
})
export class OuiVisBarVerticalStackedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
