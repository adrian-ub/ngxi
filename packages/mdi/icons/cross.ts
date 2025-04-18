import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCrossIcon],svg[mdi-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 2h3v6H19v3h-5.5v11h-3V11H5V8h5.5z"></svg:path>`,
})
export class MdiCrossIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
