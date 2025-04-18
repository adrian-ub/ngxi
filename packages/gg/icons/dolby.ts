import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggDolbyIcon],svg[gg-dolby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 4v16h24V4zm10 8a4 4 0 0 0-4-4H4v8h2a4 4 0 0 0 4-4m8 4h2V8h-2a4 4 0 0 0 0 8" clip-rule="evenodd"></svg:path>`,
})
export class GgDolbyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
