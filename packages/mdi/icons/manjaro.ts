import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiManjaroIcon],svg[mdi-manjaro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2v20h5.6V7.6h7.2V2zm7.2 7.2V22h5.6V9.2zM16.4 2v20H22V2z"></svg:path>`,
})
export class MdiManjaroIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
