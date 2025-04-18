import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsClevershuttleIcon],svg[arcticons-clevershuttle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.5 8.5H20C11.44 8.5 4.5 15.44 4.5 24S11.44 39.5 20 39.5h8V29.167h-8a5.167 5.167 0 1 1 0-10.333h8V8.5L43.5 24L29.768 37.733"></svg:path>`,
})
export class ArcticonsClevershuttleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
