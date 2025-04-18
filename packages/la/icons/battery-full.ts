import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laBatteryFullIcon],svg[la-battery-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8v16h24v-5h2v-6h-2V8zm2 2h20v12H5zm2 2v8h16v-8z"></svg:path>`,
})
export class LaBatteryFullIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
