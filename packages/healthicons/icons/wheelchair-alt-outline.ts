import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsWheelchairAltOutlineIcon],svg[healthicons-wheelchair-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M17 32a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill-rule="evenodd" d="M10 32a6 6 0 1 1 12 0a6 6 0 0 1-12 0m6-4a4 4 0 1 0 0 8a4 4 0 0 0 0-8" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M8 6v2h3.22l3.519 14.079c-4.928.62-8.74 4.825-8.74 9.921c0 5.523 4.478 10 10 10c5.524 0 10-4.477 10-10c0-1.045-.16-2.053-.457-3H31v7.17A3.001 3.001 0 0 0 32 42a3 3 0 0 0 1-5.83v-5.928l6.071 6.072l3.536-3.536l-1.414-1.414l-2.122 2.121L33 27.414V26a3 3 0 0 0-3-3h-1v-3a3 3 0 0 0-3-3H15.53L12.78 6zm8.03 13l.758 3.03a9.9 9.9 0 0 1 3.576.97H27v-3a1 1 0 0 0-1-1zM31 27h-6.338a10 10 0 0 0-1.52-2H30a1 1 0 0 1 1 1zm-15-3a8 8 0 1 0 0 16a8 8 0 0 0 0-16m15 15a1 1 0 1 1 2 0a1 1 0 0 1-2 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsWheelchairAltOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
