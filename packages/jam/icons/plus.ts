import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamPlusIcon],svg[jam-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.9 6.9v-5a1 1 0 1 0-2 0v5h-5a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2z"></svg:path>`,
})
export class JamPlusIcon {
  readonly viewBox = input("-4.5 -4.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
