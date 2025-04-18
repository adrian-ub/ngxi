import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDeleteIcon],svg[carbon-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29 26H12a1 1 0 0 1-.707-.293l-9-9a1 1 0 0 1 0-1.414l9-9A1 1 0 0 1 12 6h17a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1m-16.586-2H28V8H12.414l-8 8z"></svg:path><svg:path fill="currentColor" d="M20.414 16L25 11.414L23.586 10L19 14.586L14.414 10L13 11.414L17.586 16L13 20.586L14.414 22L19 17.414L23.586 22L25 20.586z"></svg:path>`,
})
export class CarbonDeleteIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
