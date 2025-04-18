import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqToasterIcon],svg[marketeq-toaster-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M18.75 35.417h-4.167M12.5 6.25h20.833a4.167 4.167 0 1 1 0 8.333v8.334H12.5v-8.334a4.167 4.167 0 1 1 0-8.333"></svg:path><svg:path stroke="#306CFE" d="M39.583 29.167h4.167zm0 12.5V25a2.083 2.083 0 0 0-2.083-2.083H8.333A2.083 2.083 0 0 0 6.25 25v16.667a2.083 2.083 0 0 0 2.083 2.083H37.5a2.083 2.083 0 0 0 2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqToasterIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
