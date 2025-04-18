import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArrangeBringForwardIcon],svg[mdi-arrange-bring-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h14v14H2zm20 6v14H8v-4h2v2h10V10h-2V8z"></svg:path>`,
})
export class MdiArrangeBringForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
