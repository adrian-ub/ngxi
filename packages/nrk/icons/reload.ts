import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkReloadIcon],svg[nrk-reload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.52 0h-2.44l-2.8 4l2.8 4h2.44l-2.1-3H12a7 7 0 1 1-5.563 2.75L5.202 6.102A9 9 0 1 0 12 3h-1.58z" clip-rule="evenodd"></svg:path>`,
})
export class NrkReloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
