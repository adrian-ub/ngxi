import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsForkKnifeIcon],svg[humbleicons-fork-knife-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4v2a3 3 0 0 0 3 3m0 0V4m0 5v11M8 9a3 3 0 0 0 3-3V4m5 8V4c3 2 3 4 3 8zm0 0v8"></svg:path>`,
})
export class HumbleiconsForkKnifeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
