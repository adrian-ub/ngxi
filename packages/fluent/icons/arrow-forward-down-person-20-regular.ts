import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowForwardDownPerson20RegularIcon],svg[fluent-arrow-forward-down-person-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.61 4.318l2.683 2.683L12 7l-.261-.004C8.807 6.905 7 5.273 7 3a.5.5 0 0 0-1 0l.004.208C6.114 6.024 8.478 8 12 8h4.293l-2.682 2.682l-.058.07a.5.5 0 0 0 .765.637l3.55-3.55l.055-.072l.04-.076l.02-.062l.015-.086v-.067L18 7.5a.5.5 0 0 0-.011-.105l-.005-.02l-.023-.068l-.027-.056l-.05-.071l-3.566-3.57l-.07-.057a.5.5 0 0 0-.637.765M7.5 11a2 2 0 1 1-4 0a2 2 0 0 1 4 0M9 15.5C9 16.745 8 18 5.5 18S2 16.75 2 15.5A1.5 1.5 0 0 1 3.5 14h4A1.5 1.5 0 0 1 9 15.5"></svg:path>`,
})
export class FluentArrowForwardDownPerson20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
