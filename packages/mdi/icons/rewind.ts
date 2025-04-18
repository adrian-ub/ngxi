import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRewindIcon],svg[mdi-rewind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.5 12l8.5 6V6m-9 12V6l-8.5 6z"></svg:path>`,
})
export class MdiRewindIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
