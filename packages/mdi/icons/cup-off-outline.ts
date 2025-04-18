import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCupOffOutlineIcon],svg[mdi-cup-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.83 2l2 2h12.95L17.5 15.66l1.8 1.84L21 2M2.27 3L1 4.27L3.53 6.8L5 20.23c.13 1 .97 1.77 2 1.77h10c.47 0 .91-.18 1.26-.46L19.73 23L21 21.73M5.78 9.06L16.73 20H7Z"></svg:path>`,
})
export class MdiCupOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
