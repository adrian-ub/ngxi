import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laPatreonIcon],svg[la-patreon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4v24h7V4zm17.5 0C16.813 4 13 7.813 13 12.5s3.813 8.5 8.5 8.5s8.5-3.813 8.5-8.5S26.187 4 21.5 4M6 6h3v20H6zm15.5 0c3.584 0 6.5 2.916 6.5 6.5S25.084 19 21.5 19a6.51 6.51 0 0 1-6.5-6.5C15 8.916 17.916 6 21.5 6"></svg:path>`,
})
export class LaPatreonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
