import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiElephantIcon],svg[mdi-elephant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 15.5a.5.5 0 0 1-.5.5a.5.5 0 0 1-.5-.5v-7c0-1.93-2.07-3.5-4-3.5H6a4 4 0 0 0-4 4v10h4v-4h5v4h4v-4.5a.5.5 0 0 1 .5-.5a.5.5 0 0 1 .5.5V16a3 3 0 0 0 3 3a3 3 0 0 0 3-3v-2h-2.5z"></svg:path>`,
})
export class MdiElephantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
