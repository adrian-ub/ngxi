import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsRectangleStack20SolidIcon],svg[heroicons-rectangle-stack-20-solid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.127 3.502L5.25 3.5h9.5q.062 0 .123.002A2.25 2.25 0 0 0 12.75 2h-5.5a2.25 2.25 0 0 0-2.123 1.502M1 10.25A2.25 2.25 0 0 1 3.25 8h13.5A2.25 2.25 0 0 1 19 10.25v5.5A2.25 2.25 0 0 1 16.75 18H3.25A2.25 2.25 0 0 1 1 15.75zM3.25 6.5l-.123.002A2.25 2.25 0 0 1 5.25 5h9.5c.98 0 1.814.627 2.123 1.502L16.75 6.5z"></svg:path>`,
})
export class HeroiconsRectangleStack20SolidIcon {
  readonly viewBox = input('0 0 20 20')
  readonly width = input('1em')
  readonly height = input('1em')
}
