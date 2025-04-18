import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPhonePerson24FilledIcon],svg[fluent-phone-person-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.75 2A2.25 2.25 0 0 1 16 4.25v7.087A3.5 3.5 0 0 0 15.05 17h-.277A2.77 2.77 0 0 0 12 19.772v.103c0 .74.214 1.48.665 2.125H6.25A2.25 2.25 0 0 1 4 19.75V4.25A2.25 2.25 0 0 1 6.25 2zm-2.5 16h-2.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5M20 14.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m2 5.375C22 21.431 20.714 23 17.5 23S13 21.437 13 19.875v-.103c0-.98.794-1.772 1.773-1.772h5.454c.98 0 1.773.793 1.773 1.772z"></svg:path>`,
})
export class FluentPhonePerson24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
