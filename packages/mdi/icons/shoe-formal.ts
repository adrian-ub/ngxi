import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiShoeFormalIcon],svg[mdi-shoe-formal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.5 9V8h-1l-1 1H15l-1-1h-1l-6 4H4a2 2 0 0 0-2 2v2h8l3-1h2v1h6.5v-2s.5-1 .5-2.5s-.5-2.5-.5-2.5"></svg:path>`,
})
export class MdiShoeFormalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
