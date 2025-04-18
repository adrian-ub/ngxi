import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkSomeTommeloppIcon],svg[nrk-some-tommelopp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 4v3h7.694a2 2 0 0 1 1.98 2.283l-1.429 10A2 2 0 0 1 20.265 21H8V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m6.265 15H10V4h2v5h9.694zM1 6h5v17H1v-2h3V8H1z" clip-rule="evenodd"></svg:path>`,
})
export class NrkSomeTommeloppIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
