import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidStorageCardOneIcon],svg[icon-park-solid-storage-card-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M33.778 4h-18v8h18z"></svg:path><svg:path stroke-linecap="round" d="M15.366 4h-4.588a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H34.19"></svg:path><svg:path stroke-linecap="round" d="m27.778 20l-8 8.001h10.004l-8.004 8"></svg:path></svg:g>`,
})
export class IconParkSolidStorageCardOneIcon {
  readonly viewBox = input("0 0 49 48")
  readonly width = input("1.03em")
  readonly height = input("1em")
}
