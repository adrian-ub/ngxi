import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiViewStreamOutlineIcon],svg[mdi-view-stream-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6v12h17V6zm15 10H6v-3h13zM6 11V8h13v3z"></svg:path>`,
})
export class MdiViewStreamOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
