import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSmartLifeIcon],svg[arcticons-smart-life-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 21.431L24 8.743L5.5 21.431v20.856h37zm-5.035-8.718a4.4 4.4 0 0 0-4.804-2.917l-.008.013m8.695 1.685a8.65 8.65 0 0 0-9.426-5.687"></svg:path>`,
})
export class ArcticonsSmartLifeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
