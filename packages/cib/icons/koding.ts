import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibKodingIcon],svg[cib-koding-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.068 0h29.599v8H1.334V0zm0 12H24v8H.932v-8zm0 12h29.599v8H1.334v-8z"></svg:path>`,
})
export class CibKodingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
