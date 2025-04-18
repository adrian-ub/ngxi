import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSolarPanel2Icon],svg[tabler-solar-panel-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 2a4 4 0 1 0 8 0M4 3h1m14 0h1m-8 6v1m5.2-2.8l.707.707M6.8 7.2l-.7.7M4.28 21h15.44a1 1 0 0 0 .97-1.243l-1.5-6a1 1 0 0 0-.97-.757H5.78a1 1 0 0 0-.97.757l-1.5 6A1 1 0 0 0 4.28 21M4 17h16m-10-4l-1 8m5-8l1 8"></svg:path>`,
})
export class TablerSolarPanel2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
