import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPhotoSensor2Icon],svg[tabler-photo-sensor-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 5h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-2M7 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m1 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0"></svg:path>`,
})
export class TablerPhotoSensor2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
