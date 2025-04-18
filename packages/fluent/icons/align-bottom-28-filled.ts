import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAlignBottom28FilledIcon],svg[fluent-align-bottom-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.75 25a.75.75 0 0 1 0-1.5h22.5a.75.75 0 0 1 0 1.5zM5 19.25A2.75 2.75 0 0 0 7.75 22h2.5A2.75 2.75 0 0 0 13 19.25V5.75A2.75 2.75 0 0 0 10.25 3h-2.5A2.75 2.75 0 0 0 5 5.75zm10 0A2.75 2.75 0 0 0 17.75 22h2.5A2.75 2.75 0 0 0 23 19.25v-8a2.75 2.75 0 0 0-2.75-2.75h-2.5A2.75 2.75 0 0 0 15 11.25z"></svg:path>`,
})
export class FluentAlignBottom28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
