import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiEggIcon],svg[mdi-egg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 14.5A7.5 7.5 0 0 1 12 22a7.5 7.5 0 0 1-7.5-7.5C4.5 10.36 7.86 2 12 2s7.5 8.36 7.5 12.5"></svg:path>`,
})
export class MdiEggIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
