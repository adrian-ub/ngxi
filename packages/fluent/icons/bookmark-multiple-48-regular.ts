import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBookmarkMultiple48RegularIcon],svg[fluent-bookmark-multiple-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.668 6.5A5 5 0 0 1 18.999 4h9.75C34.41 4 39 8.59 39 14.25V34a5 5 0 0 1-2.5 4.331V14.25a7.75 7.75 0 0 0-7.75-7.75zM14 9a5 5 0 0 0-5 5v28.75a1.25 1.25 0 0 0 1.943 1.04L21.5 36.752l10.557 7.038A1.25 1.25 0 0 0 34 42.75V14a5 5 0 0 0-5-5zm-2.5 5a2.5 2.5 0 0 1 2.5-2.5h15a2.5 2.5 0 0 1 2.5 2.5v26.414l-9.307-6.204a1.25 1.25 0 0 0-1.386 0L11.5 40.414z"></svg:path>`,
})
export class FluentBookmarkMultiple48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
