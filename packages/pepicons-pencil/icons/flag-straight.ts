import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilFlagStraightIcon],svg[pepicons-pencil-flag-straight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M16.58 3H3.5v8h13.08l-2.3-3.283a1.25 1.25 0 0 1 0-1.434zM3.5 2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h13.08a1 1 0 0 0 .819-1.573L15.1 7.143a.25.25 0 0 1 0-.286l2.3-3.284A1 1 0 0 0 16.579 2z"></svg:path><svg:path d="M3 3a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-1 0v-14A.5.5 0 0 1 3 3"></svg:path></svg:g>`,
})
export class PepiconsPencilFlagStraightIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
