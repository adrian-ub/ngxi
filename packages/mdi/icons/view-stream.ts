import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiViewStreamIcon],svg[mdi-view-stream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5v6h17V5M4 18h17v-6H4z"></svg:path>`,
})
export class MdiViewStreamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
