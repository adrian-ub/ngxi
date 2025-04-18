import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOmegalauncherIcon],svg[arcticons-omegalauncher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.17 39.28v1.87a2.35 2.35 0 0 1-2.35 2.35h-7.57a2.35 2.35 0 0 1-2.35-2.35v-2.46a2.33 2.33 0 0 1 1.5-2.18A16.64 16.64 0 0 0 41.17 21.1c0-9.17-7.69-16.6-17.17-16.6S6.83 11.93 6.83 21.1A16.64 16.64 0 0 0 17.6 36.51a2.33 2.33 0 0 1 1.5 2.18v2.46a2.35 2.35 0 0 1-2.35 2.35H9.18a2.35 2.35 0 0 1-2.35-2.35v-1.87"></svg:path>`,
})
export class ArcticonsOmegalauncherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
