import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDoorArrowRight28FilledIcon],svg[fluent-door-arrow-right-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h7.4A7.5 7.5 0 0 1 23 13.427V5a3 3 0 0 0-3-3zm1.5 13a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3M27 20.5a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0M16.5 20a.5.5 0 0 0 0 1h6.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 .146-.351v-.006a.5.5 0 0 0-.146-.35l-3-3a.5.5 0 0 0-.708.707L23.293 20z"></svg:path>`,
})
export class FluentDoorArrowRight28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
