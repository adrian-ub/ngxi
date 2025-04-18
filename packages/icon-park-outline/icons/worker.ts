import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineWorkerIcon],svg[icon-park-outline-worker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M32 16a8 8 0 1 1-16 0m8-8a8 8 0 0 0-8 8h16a8 8 0 0 0-8-8m-12 8h24M24 4v4m0 19c-9.389 0-17 7.163-17 16h34c0-8.837-7.611-16-17-16m-6 7v4m12-4v4"></svg:path>`,
})
export class IconParkOutlineWorkerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
