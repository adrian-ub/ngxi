import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTelevisionOffIcon],svg[mdi-television-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.5 2.77L1.78 1.5L21 20.72L19.73 22l-3-3H16v2H8v-2H3a2 2 0 0 1-2-2V5c0-.5.17-.93.46-1.27zM21 17V5H7.82l-2-2H21a2 2 0 0 1 2 2v12c0 .85-.55 1.59-1.3 1.87L19.82 17zM3 17h11.73L3 5.27z"></svg:path>`,
})
export class MdiTelevisionOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
