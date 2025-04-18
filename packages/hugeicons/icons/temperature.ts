import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTemperatureIcon],svg[hugeicons-temperature-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 22a5 5 0 0 0 3-9V5c0-.932 0-1.398-.152-1.766a2 2 0 0 0-1.082-1.082C13.4 2 12.932 2 12 2s-1.399 0-1.766.152a2 2 0 0 0-1.082 1.082C9 3.602 9 4.068 9 5v8a5 5 0 0 0 3 9"></svg:path><svg:path d="M12 15a2 2 0 1 0 0 4a2 2 0 0 0 0-4m0 0V8"></svg:path></svg:g>`,
})
export class HugeiconsTemperatureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
