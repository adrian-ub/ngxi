import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faExpandIcon],svg[fa-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M755 928q0 13-10 23l-332 332l144 144q19 19 19 45t-19 45t-45 19H64q-26 0-45-19t-19-45v-448q0-26 19-45t45-19t45 19l144 144l332-332q10-10 23-10t23 10l114 114q10 10 10 23m781-864v448q0 26-19 45t-45 19t-45-19l-144-144l-332 332q-10 10-23 10t-23-10L791 631q-10-10-10-23t10-23l332-332l-144-144q-19-19-19-45t19-45t45-19h448q26 0 45 19t19 45"></svg:path>`,
})
export class FaExpandIcon {
  readonly viewBox = input("0 0 1536 1536")
  readonly width = input("1em")
  readonly height = input("1em")
}
