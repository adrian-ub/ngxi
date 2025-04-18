import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLocalLanguage20RegularIcon],svg[fluent-local-language-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 1.996a.5.5 0 0 0 0 1H13v1.869C13 6.03 11.832 7 10.5 7a.5.5 0 0 0 0 1C12.21 8 14 6.742 14 4.865V2.496a.5.5 0 0 0-.5-.5zM7.961 5.307a.5.5 0 0 0-.923 0l-5 12a.5.5 0 1 0 .923.385l1.537-3.69H10.5l1.539 3.695a.5.5 0 1 0 .923-.385l-1.662-3.99l-.01-.022zm2.122 7.696H4.915L7.5 6.8zM15.5 1.996a.5.5 0 0 1 .5.5v3.505h1.5a.5.5 0 0 1 0 1H16v6.495a.5.5 0 1 1-1 0v-11a.5.5 0 0 1 .5-.5"></svg:path>`,
})
export class FluentLocalLanguage20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
