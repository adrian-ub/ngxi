import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiEmbyIcon],svg[mdi-emby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2L6 7l1 1l-5 5l5 5l1-1l5 5l5-5l-1-1l5-5l-5-5l-1 1zm-1 6.5l6 3.5l-6 3.5z"></svg:path>`,
})
export class MdiEmbyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
