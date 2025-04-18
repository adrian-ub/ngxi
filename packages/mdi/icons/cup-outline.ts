import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCupOutlineIcon],svg[mdi-cup-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 2l2 18.23c.13 1 .97 1.77 2 1.77h10c1 0 1.87-.77 2-1.77L21 2zm2.22 2h13.56L17 20H7z"></svg:path>`,
})
export class MdiCupOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
