import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEveryDoorIcon],svg[arcticons-every-door-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.117 4.5h23.767v39H12.117z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.838 28.415h18.289v12.748H14.838zm.012-19.183c2.894-1.368 5.909-1.954 9.133-1.954c3.348 0 6.15.533 9.13 2.004m.005.004V22.01H14.84V9.265h.03"></svg:path><svg:circle cx="32.914" cy="25.281" r="1.24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsEveryDoorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
