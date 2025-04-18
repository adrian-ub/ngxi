import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPersonHome16FilledIcon],svg[fluent-person-home-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.964 8L7.699 9.941c-.444.38-.699.934-.699 1.519V14c-3.141 0-5-2.029-5-4v-.5A1.5 1.5 0 0 1 3.5 8zM7 7a2.75 2.75 0 1 0 0-5.5A2.75 2.75 0 0 0 7 7m7.651 3.701l-2.825-2.422a.5.5 0 0 0-.651 0L8.35 10.701a1 1 0 0 0-.349.759v3.04a.5.5 0 0 0 .5.5h1.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 .5.5h1.5a.5.5 0 0 0 .5-.5v-3.04c0-.292-.128-.569-.349-.759z"></svg:path>`,
})
export class FluentPersonHome16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
