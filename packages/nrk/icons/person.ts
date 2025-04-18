import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkPersonIcon],svg[nrk-person-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1a8 8 0 1 0 0 16a8 8 0 0 0 0-16M6 9a6 6 0 1 1 12 0A6 6 0 0 1 6 9M3 23v-4h18v4h-2v-2H5v2z"></svg:path>`,
})
export class NrkPersonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
