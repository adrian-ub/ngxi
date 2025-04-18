import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTextOrientationIcon],svg[tabler-text-orientation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 15l-5-5C2.633 8.633 2.633 6.367 4 5s3.633-1.367 5 0l5 5m-8.5 1.5l5-5M21 12l-9 9m9-9v4m0-4h-4"></svg:path>`,
})
export class TablerTextOrientationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
