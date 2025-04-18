import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWaves2Icon],svg[arcticons-waves-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 26c-4.874 0-4.874-4-9.749-4s-4.873 4-9.746 4c-4.876 0-4.876-4-9.752-4S9.375 26 4.5 26m39 10c-4.874 0-4.874-4-9.749-4s-4.873 4-9.746 4c-4.876 0-4.876-4-9.752-4S9.375 36 4.5 36m39-20c-4.874 0-4.874-4-9.749-4s-4.873 4-9.746 4c-4.876 0-4.876-4-9.752-4S9.375 16 4.5 16"></svg:path>`,
})
export class ArcticonsWaves2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
