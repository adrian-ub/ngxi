import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phDoorOpenFillIcon],svg[ph-door-open-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 216h-24V40a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16v176H24a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16m-64 0H64V40h104Zm-40-84a12 12 0 1 1 12 12a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhDoorOpenFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
