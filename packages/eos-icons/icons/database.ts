import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsDatabaseIcon],svg[eos-icons-database-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 16v3c0 1.657-4.03 3-9 3s-9-1.343-9-3v-3c0 1.657 4.03 3 9 3s9-1.343 9-3m-9-1c-4.97 0-9-1.343-9-3v3c0 1.657 4.03 3 9 3s9-1.343 9-3v-3c0 1.657-4.03 3-9 3m0-13C7.03 2 3 3.343 3 5v2c0 1.657 4.03 3 9 3s9-1.343 9-3V5c0-1.657-4.03-3-9-3m0 9c-4.97 0-9-1.343-9-3v3c0 1.657 4.03 3 9 3s9-1.343 9-3V8c0 1.657-4.03 3-9 3"></svg:path>`,
})
export class EosIconsDatabaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
