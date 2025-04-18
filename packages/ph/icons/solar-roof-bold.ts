import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSolarRoofBoldIcon],svg[ph-solar-roof-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m250.73 122.63l-40-80A12 12 0 0 0 200 36H56a12 12 0 0 0-10.73 6.63l-40 80A12 12 0 0 0 4 128v56a20 20 0 0 0 20 20h208a20 20 0 0 0 20-20v-56a12 12 0 0 0-1.27-5.37M96.58 60l8 16H83.42l-8-16Zm48 0l8 16h-21.16l-8-16Zm-41.16 56l-8-16h21.16l8 16Zm48 0l-8-16h21.16l8 16Zm48 0l-8-16h21.16l8 16Zm1.16-40h-21.16l-8-16h21.16ZM28 130.83l28-56l28 56V180H28ZM108 180v-40h120v40Z"></svg:path>`,
})
export class PhSolarRoofBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
