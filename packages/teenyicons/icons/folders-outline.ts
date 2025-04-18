import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsFoldersOutlineIcon],svg[teenyicons-folders-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M3.5 8.5v-7a1 1 0 0 1 1-1h3l2 2h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-9m-1-1a1 1 0 0 0 1 1m-1-1v-3h-2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4h-7"></svg:path>`,
})
export class TeenyiconsFoldersOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
