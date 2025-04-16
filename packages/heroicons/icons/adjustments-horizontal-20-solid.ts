import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsAdjustmentsHorizontal20SolidIcon],svg[heroicons-adjustments-horizontal-20-solid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 3.75a2 2 0 1 0-4 0a2 2 0 0 0 4 0m7.25.75a.75.75 0 0 0 0-1.5h-5.5a.75.75 0 0 0 0 1.5zM5 3.75a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 .75.75M4.25 17a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5zm13 0a.75.75 0 0 0 0-1.5h-5.5a.75.75 0 0 0 0 1.5zM9 10a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1 0-1.5h5.5A.75.75 0 0 1 9 10m8.25.75a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5zM14 10a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-4 6.25a2 2 0 1 0-4 0a2 2 0 0 0 4 0"></svg:path>`,
})
export class HeroiconsAdjustmentsHorizontal20SolidIcon {
  readonly viewBox = input('0 0 20 20')
  readonly width = input('1em')
  readonly height = input('1em')
}
