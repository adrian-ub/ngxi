import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feTableIcon],svg[fe-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m9 10v4h7v-4zm-9 0v4h7v-4zm9-6v4h7V8zM4 8v4h7V8z"></svg:path>`,
})
export class FeTableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
