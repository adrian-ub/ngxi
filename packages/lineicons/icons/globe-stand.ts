import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsGlobeStandIcon],svg[lineicons-globe-stand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.267 2.1a8.63 8.63 0 0 0 2.997 16.002a1 1 0 0 0-.015.148v2.25h-4a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5h-4v-2.25l-.001-.047a8.6 8.6 0 0 0 4.149-1.156a.75.75 0 0 0-.75-1.299A7.13 7.13 0 1 1 9.017 3.4a.75.75 0 1 0-.75-1.3"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.793 4.743a5.58 5.58 0 1 0 5.58 9.664a5.58 5.58 0 0 0-5.58-9.664m-.743 6.871a4.08 4.08 0 1 1 7.065-4.079a4.08 4.08 0 0 1-7.065 4.08" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsGlobeStandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
