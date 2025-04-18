import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightningBoltIcon],svg[mdi-lightning-bolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 15H6l7-14v8h5l-7 14z"></svg:path>`,
})
export class MdiLightningBoltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
