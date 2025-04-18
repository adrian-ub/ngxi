import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCommaIcon],svg[mdi-comma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3h9.95v9.96l-3.99 7.98H8l3.97-7.98H7z"></svg:path>`,
})
export class MdiCommaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
