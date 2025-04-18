import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAsphalt9Icon],svg[arcticons-asphalt-9-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.345 4.5v31.245L23.95 43.5l15.704-7.472V4.5z"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M15.432 11.816h17.136v10.977H15.432z"></svg:path><svg:path d="M15.432 28.837v3.089l8.519 4.258l8.617-4.078v-9.314"></svg:path></svg:g>`,
})
export class ArcticonsAsphalt9Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
