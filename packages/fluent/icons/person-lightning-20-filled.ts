import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPersonLightning20FilledIcon],svg[fluent-person-lightning-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8m-4.991 9A2 2 0 0 0 3 13c0 1.691.833 2.966 2.135 3.797C6.417 17.614 8.145 18 10 18c.6 0 1.188-.04 1.752-.123L11.97 17h-.47a1.5 1.5 0 0 1-1.384-2.077L11.752 11zm7.603 5a.5.5 0 0 1 .485.621l-.434 1.738c-.121.483.462.827.826.487l4.872-4.548A.75.75 0 0 0 17.85 13h-.404a.5.5 0 0 1-.474-.658l.561-1.684A.5.5 0 0 0 17.06 10h-3.473a.5.5 0 0 0-.462.308l-2.083 5a.5.5 0 0 0 .461.692z"></svg:path>`,
})
export class FluentPersonLightning20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
