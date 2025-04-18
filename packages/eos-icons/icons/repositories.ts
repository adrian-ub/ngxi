import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsRepositoriesIcon],svg[eos-icons-repositories-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 23.01l2.5-1.5l2.5 1.5V19H8zM8 5h2v2H8zm0 5h2v2H8zm0 5.01h2v2H8z"></svg:path><svg:path fill="currentColor" d="M18.36 1.05A1.5 1.5 0 0 0 18 1H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2V3h12v16h-3v2h3a2 2 0 0 0 2-2V3a2 2 0 0 0-1.64-1.95"></svg:path>`,
})
export class EosIconsRepositoriesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
