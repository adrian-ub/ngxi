import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPontiacIcon],svg[arcticons-pontiac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.995 9.108L13.585 4.5s10.42 38.787 10.368 39L34.416 4.545z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m23.982 19.685l-1.186-3.3l-4.078-1.087l3.987-.981l1.312-3.377l1.186 3.3l4.078 1.087l-3.987.982z"></svg:path>`,
})
export class ArcticonsPontiacIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
