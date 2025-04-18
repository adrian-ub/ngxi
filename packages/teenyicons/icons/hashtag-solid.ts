import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsHashtagSolidIcon],svg[teenyicons-hashtag-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m5.41 5l.597-3.582l.986.164L6.423 5H9.41l.597-3.582l.986.164L10.423 5H13v1h-2.743l-.5 3H13v1H9.59l-.597 3.582l-.986-.164l.57-3.418H5.59l-.597 3.582l-.986-.164l.57-3.418H2V9h2.743l.5-3H2V5zm.847 1l-.5 3h2.986l.5-3z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsHashtagSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
