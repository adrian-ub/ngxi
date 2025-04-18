import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkDialogueIcon],svg[nrk-dialogue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M23 12H6v7h12l2 3h2l-2-3h3z"></svg:path><svg:path d="M1 9V2h17v7H6l-2 3H2l2-3zm2-2V4h13v3z" opacity=".5"></svg:path></svg:g>`,
})
export class NrkDialogueIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
