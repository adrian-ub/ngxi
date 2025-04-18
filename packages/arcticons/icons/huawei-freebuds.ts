import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHuaweiFreebudsIcon],svg[arcticons-huawei-freebuds-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m36.904 41.197l-5.803-10.682a4.46 4.46 0 0 1-.27-4.417c1.858-4.214-.195-8.34-3.99-9.33c-4.27-1.116-7.68.68-8.991 2.569c-1.408 2.026-3.316 4.549 1.014 8.587a7.97 7.97 0 0 0 4.89 1.803c1.677.135 3.172.744 3.832 2.456l5.5 11.303"></svg:path>`,
})
export class ArcticonsHuaweiFreebudsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
