import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMapPinsIcon],svg[tabler-map-pins-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.828 9.828a4 4 0 1 0-5.656 0L8 12.657zM8 7v.01m10.828 10.818a4 4 0 1 0-5.656 0L16 20.657zM16 15v.01"></svg:path>`,
})
export class TablerMapPinsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
