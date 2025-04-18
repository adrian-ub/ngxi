import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPeopleSearch20FilledIcon],svg[fluent-people-search-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8m4.865 14.797c-1.071.683-2.454 1.064-3.962 1.171a1.5 1.5 0 0 0-.342-.529l-2-1.999A4.5 4.5 0 0 0 9 13.5a4.5 4.5 0 0 0-.758-2.5H15a2 2 0 0 1 2 2c0 1.691-.833 2.966-2.135 3.797M4.5 17c.786 0 1.512-.26 2.096-.697l2.55 2.55a.5.5 0 1 0 .708-.707l-2.55-2.55A3.5 3.5 0 1 0 4.5 17m0-1a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5"></svg:path>`,
})
export class FluentPeopleSearch20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
