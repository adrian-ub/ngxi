import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiNavigationOutlineIcon],svg[mdi-navigation-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 7.3l4.3 10.4l-3.5-1.5l-.8-.4l-.8.4l-3.5 1.5zM12 2L4.5 20.3l.7.7l6.8-3l6.8 3l.7-.7z"></svg:path>`,
})
export class MdiNavigationOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
