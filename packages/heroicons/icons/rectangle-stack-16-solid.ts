import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsRectangleStack16SolidIcon],svg[heroicons-rectangle-stack-16-solid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3.5A1.5 1.5 0 0 1 6.5 2h3A1.5 1.5 0 0 1 11 3.5zM4.5 5A1.5 1.5 0 0 0 3 6.5v.041a3 3 0 0 1 .5-.041h9q.255 0 .5.041V6.5A1.5 1.5 0 0 0 11.5 5zm8 3h-9A1.5 1.5 0 0 0 2 9.5v3A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 12.5 8"></svg:path>`,
})
export class HeroiconsRectangleStack16SolidIcon {
  readonly viewBox = input('0 0 16 16')
  readonly width = input('1em')
  readonly height = input('1em')
}
