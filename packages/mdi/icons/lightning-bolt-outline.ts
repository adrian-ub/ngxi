import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightningBoltOutlineIcon],svg[mdi-lightning-bolt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 9.47V11h3.76L13 14.53V13H9.24zM13 1L6 15h5v8l7-14h-5z"></svg:path>`,
})
export class MdiLightningBoltOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
