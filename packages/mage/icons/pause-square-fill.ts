import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[magePauseSquareFillIcon],svg[mage-pause-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.5A6.76 6.76 0 0 0 8.75 22h6.5A6.76 6.76 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.25 2m-3.93 13.09a1.24 1.24 0 0 1-1.23 1.23H8.58a1.24 1.24 0 0 1-1.23-1.23V8.91a1.24 1.24 0 0 1 1.23-1.23h1.51a1.24 1.24 0 0 1 1.23 1.23zm5.32 0a1.24 1.24 0 0 1-1.23 1.23H13.9a1.24 1.24 0 0 1-1.23-1.23V8.91a1.24 1.24 0 0 1 1.23-1.23h1.51a1.24 1.24 0 0 1 1.23 1.23z"></svg:path>`,
})
export class MagePauseSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
