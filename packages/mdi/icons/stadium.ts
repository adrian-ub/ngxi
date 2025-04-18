import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiStadiumIcon],svg[mdi-stadium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5L3 7V3zm11-2v4l4-2zm-7-1v4l4-2zm-6 8c1.4.5 3.8 1 7 1s5.6-.5 7-1c0-.2-2.8-1-7-1s-7 .9-7 1m10 7H9v4.9c-4.1-.4-7-1.5-7-2.9v-9c0-1.7 4.5-3 10-3s10 1.3 10 3v9c0 1.3-2.9 2.5-7 2.9z"></svg:path>`,
})
export class MdiStadiumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
