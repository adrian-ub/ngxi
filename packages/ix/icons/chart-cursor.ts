import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixChartCursorIcon],svg[ix-chart-cursor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 149.333h42.667V192H64zm85.333 0H192V192h-42.667zM362.667 64v46.309c18.185 6.427 32.597 20.84 39.024 39.024H448V192h-46.309c-6.427 18.185-20.84 32.597-39.024 39.025v46.308H320v-46.308c-18.185-6.427-32.597-20.84-39.025-39.025h-46.308v-42.667h46.308c6.428-18.185 20.84-32.597 39.025-39.025V64zM320 320h42.667v42.667H320zm0 85.333h42.667V448H320z"></svg:path>`,
})
export class IxChartCursorIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
