import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhWesternunionIcon],svg[whh-westernunion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 1024q-134 0-195-56.5T512 800V576h-32l-96-192l-96 192H128L0 0h160l96 288L320 0h128l64 288L608 0h160L668 448h36v352q0 31 24.5 63.5T768 896q23 0 43.5-29.5T832 800V448h192v352q0 112-59 168t-197 56"></svg:path>`,
})
export class WhhWesternunionIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
