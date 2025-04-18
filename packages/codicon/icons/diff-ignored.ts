import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconDiffIgnoredIcon],svg[codicon-diff-ignored-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 1h13l.5.5v13l-.5.5h-13l-.5-.5v-13zM2 14h12V2H2zm8-10h2v2l-6 6H4v-2z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconDiffIgnoredIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
