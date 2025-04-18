import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBatteryFull1SolidIcon],svg[streamline-battery-full-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.44 2.44A1.5 1.5 0 0 1 1.5 2h10A1.5 1.5 0 0 1 13 3.5v1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1v1a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 0 10.5v-7c0-.398.158-.78.44-1.06M3.374 5a.625.625 0 1 0-1.25 0v4a.625.625 0 1 0 1.25 0zm3.5 0a.625.625 0 1 0-1.25 0v4a.625.625 0 1 0 1.25 0zm2.875-.625c.345 0 .625.28.625.625v4a.625.625 0 1 1-1.25 0V5c0-.345.28-.625.625-.625" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBatteryFull1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
