import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCoffinIcon],svg[mdi-coffin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 22L5 8l3-6h8l3 6l-3 14zm3-16v2H9v2h2v5h2v-5h2V8h-2V6z"></svg:path>`,
})
export class MdiCoffinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
