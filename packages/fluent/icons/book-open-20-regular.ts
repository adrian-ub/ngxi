import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBookOpen20RegularIcon],svg[fluent-book-open-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 16c-.456.607-1.182 1-2 1H3.5A1.5 1.5 0 0 1 2 15.5v-11A1.5 1.5 0 0 1 3.5 3H8c.818 0 1.544.393 2 1c.456-.607 1.182-1 2-1h4.5A1.5 1.5 0 0 1 18 4.5v11a1.5 1.5 0 0 1-1.5 1.5H12a2.5 2.5 0 0 1-2-1M3 4.5v11a.5.5 0 0 0 .5.5H8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 8 4H3.5a.5.5 0 0 0-.5.5m7.5 10A1.5 1.5 0 0 0 12 16h4.5a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5H12a1.5 1.5 0 0 0-1.5 1.5z"></svg:path>`,
})
export class FluentBookOpen20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
