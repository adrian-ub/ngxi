import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAlignSpaceEvenlyVertical24FilledIcon],svg[fluent-align-space-evenly-vertical-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 2A2.5 2.5 0 0 0 4 4.5v1A2.5 2.5 0 0 0 6.5 8h11A2.5 2.5 0 0 0 20 5.5v-1A2.5 2.5 0 0 0 17.5 2zm0 7A2.5 2.5 0 0 0 4 11.5v1A2.5 2.5 0 0 0 6.5 15h11a2.5 2.5 0 0 0 2.5-2.5v-1A2.5 2.5 0 0 0 17.5 9zm0 7A2.5 2.5 0 0 0 4 18.5v1A2.5 2.5 0 0 0 6.5 22h11a2.5 2.5 0 0 0 2.5-2.5v-1a2.5 2.5 0 0 0-2.5-2.5z"></svg:path>`,
})
export class FluentAlignSpaceEvenlyVertical24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
