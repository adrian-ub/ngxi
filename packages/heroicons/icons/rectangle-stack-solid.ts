import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsRectangleStackSolidIcon],svg[heroicons-rectangle-stack-solid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.566 4.657A4.5 4.5 0 0 1 6.75 4.5h10.5q.616.002 1.183.157A3 3 0 0 0 15.75 3h-7.5a3 3 0 0 0-2.684 1.657M2.25 12a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3zm3-4.5q-.616.002-1.184.157A3 3 0 0 1 6.75 6h10.5a3 3 0 0 1 2.683 1.657A4.5 4.5 0 0 0 18.75 7.5z"></svg:path>`,
})
export class HeroiconsRectangleStackSolidIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
