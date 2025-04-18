import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laBatteryEmptyIcon],svg[la-battery-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8v16h24v-5h2v-6h-2V8zm2 2h20v12H5z"></svg:path>`,
})
export class LaBatteryEmptyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
