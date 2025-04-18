import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPerson620FilledIcon],svg[fluent-person-6-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6a4 4 0 1 1 8 0a4 4 0 0 1-8 0m-3 7c0-1.113.903-2 2.009-2h9.042A3.5 3.5 0 0 0 13 13.5v3c0 .37.058.728.165 1.064c-.961.294-2.04.436-3.165.436c-1.855 0-3.583-.386-4.865-1.203C3.833 15.967 3 14.69 3 13m12 .5a1.5 1.5 0 0 1 2.625-.992a.5.5 0 0 0 .75-.662A2.5 2.5 0 0 0 14 13.5v3a2.5 2.5 0 1 0 1-2zm1.5 4.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path>`,
})
export class FluentPerson620FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
