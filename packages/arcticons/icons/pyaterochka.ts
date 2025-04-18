import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPyaterochkaIcon],svg[arcticons-pyaterochka-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.667 30.973a8.142 8.142 0 0 0 15.685-3.057a8.14 8.14 0 0 0-15.487-3.507M36.45 6.471l-7.727.208a10.41 10.41 0 0 0-9.673 7.354l-.263.855l7.746-.205a10.41 10.41 0 0 0 9.772-7.678zM15.865 24.409l2.922-9.521"></svg:path>`,
})
export class ArcticonsPyaterochkaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
