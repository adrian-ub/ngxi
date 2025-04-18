import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSignTextIcon],svg[mdi-sign-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11 3l1-1l1 1v2h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-7v3a2 2 0 0 1 2 2H9a2 2 0 0 1 2-2v-3H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h7zM6 8v2h12V8zm0 4v2h7v-2z"></svg:path>`,
})
export class MdiSignTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
