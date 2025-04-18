import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsSymlinkIcon],svg[eos-icons-symlink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Zm-1 17.47v-2.19c-2.78 0-4.61.85-6 2.72c.56-2.67 2.11-5.33 6-5.87V12l4 3.73ZM13 9V3.5L18.51 9Z"></svg:path>`,
})
export class EosIconsSymlinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
