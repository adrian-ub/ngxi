import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAutosum20FilledIcon],svg[fluent-autosum-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.81 3.706a.75.75 0 0 1 .69-.456h11a.75.75 0 0 1 0 1.5H6.262l4.146 4.308a.75.75 0 0 1 .035 1.001L6.104 15.25H15.5a.75.75 0 0 1 0 1.5h-11a.75.75 0 0 1-.575-1.231L8.86 9.613L3.96 4.52a.75.75 0 0 1-.15-.814"></svg:path>`,
})
export class FluentAutosum20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
