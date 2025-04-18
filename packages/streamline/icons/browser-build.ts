import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBrowserBuildIcon],svg[streamline-browser-build-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 7.5v5a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h4v7zm-13-4h13m-3.5 4v-7"></svg:path>`,
})
export class StreamlineBrowserBuildIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
