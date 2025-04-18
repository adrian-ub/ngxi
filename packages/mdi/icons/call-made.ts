import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCallMadeIcon],svg[mdi-call-made-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 5v2h6.59L4 18.59L5.41 20L17 8.41V15h2V5"></svg:path>`,
})
export class MdiCallMadeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
