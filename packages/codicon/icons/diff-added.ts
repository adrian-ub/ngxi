import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconDiffAddedIcon],svg[codicon-diff-added-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M1.5 1h12l.5.5v12l-.5.5h-12l-.5-.5v-12zM2 13h11V2H2z"></svg:path><svg:path d="M8 4H7v3H4v1h3v3h1V8h3V7H8z"></svg:path></svg:g>`,
})
export class CodiconDiffAddedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
