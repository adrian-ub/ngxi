import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiSearchForIcon],svg[zmdi-search-for-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m320 235l107 106l-32 32l-107-107v-16l-6-6q-39 33-90 33q-38 0-70-19l31-31q19 8 39 8q40 0 68-28.5t28-68T260 71t-68-28t-68 28t-28 68h75l-89 85l-82-85h54q0-57 40.5-98T192 0q58 0 98.5 40.5T331 139q0 51-34 90l6 6z"></svg:path>`,
})
export class ZmdiSearchForIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
