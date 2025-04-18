import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPocketIcon],svg[mdi-pocket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3h16v14.63l-8 4.62l-8-4.62zm14 6H6v7.5l6 3.44l6-3.44zm0-4H6v2h12z"></svg:path>`,
})
export class MdiPocketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
