import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSearchPropertySolidIcon],svg[teenyicons-search-property-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8V6.207l1.5-1.5l1.5 1.5V8z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M0 6.5a6.5 6.5 0 1 1 11.436 4.23l3.418 3.416l-.707.707l-3.418-3.417A6.5 6.5 0 0 1 0 6.5m8.854-.854l-2-2a.5.5 0 0 0-.708 0l-2 2A.5.5 0 0 0 4 6v2.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.146-.354" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsSearchPropertySolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
