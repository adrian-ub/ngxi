import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiNotEqualIcon],svg[mdi-not-equal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 10H9V8h12zm0 6H9v-2h12zM4 5h2v11H4zm2 13v2H4v-2z"></svg:path>`,
})
export class MdiNotEqualIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
