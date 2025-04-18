import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsOracleIcon],svg[grommet-icons-oracle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.957 18.912A6.953 6.953 0 0 1 1 11.962A6.963 6.963 0 0 1 7.957 5h8.087A6.96 6.96 0 0 1 23 11.962a6.95 6.95 0 0 1-6.956 6.95zm7.907-2.453a4.497 4.497 0 0 0 4.503-4.497a4.507 4.507 0 0 0-4.503-4.508H8.136a4.507 4.507 0 0 0-4.503 4.508a4.5 4.5 0 0 0 4.503 4.497z"></svg:path>`,
})
export class GrommetIconsOracleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
