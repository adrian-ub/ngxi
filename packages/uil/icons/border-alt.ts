import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilBorderAltIcon],svg[uil-border-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 18.5a1 1 0 1 0 1 1a1 1 0 0 0-1-1m9-15a1 1 0 0 0-1-1h-16a1 1 0 0 0-1 1v16a1 1 0 0 0 2 0v-15h15a1 1 0 0 0 1-1m-5 15a1 1 0 1 0 1 1a1 1 0 0 0-1-1m-8 0a1 1 0 1 0 1 1a1 1 0 0 0-1-1m12-12a1 1 0 1 0 1 1a1 1 0 0 0-1-1m0 4a1 1 0 1 0 1 1a1 1 0 0 0-1-1m0 4a1 1 0 1 0 1 1a1 1 0 0 0-1-1m0 4a1 1 0 1 0 1 1a1 1 0 0 0-1-1"></svg:path>`,
})
export class UilBorderAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
