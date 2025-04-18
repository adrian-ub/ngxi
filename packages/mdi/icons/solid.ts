import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSolidIcon],svg[mdi-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h24v24H0"></svg:path>`,
})
export class MdiSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
