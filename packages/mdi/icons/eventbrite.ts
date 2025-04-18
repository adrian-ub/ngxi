import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiEventbriteIcon],svg[mdi-eventbrite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 17.5c-1.85 0-3.58-.94-4.59-2.5l10-2.25l4.67-1a9.76 9.76 0 0 0-1-4.11C18.66 2.61 12.62.5 7.58 2.92C2.55 5.34.44 11.38 2.86 16.41c2.43 5.03 8.47 7.15 13.5 4.73c2.14-1.05 3.89-2.83 4.86-5.03L16.61 15A5.47 5.47 0 0 1 12 17.5m0-11c1.76 0 3.41.84 4.44 2.27l-9.87 2.42A5.49 5.49 0 0 1 12 6.5z" fill="currentColor"></svg:path>`,
})
export class MdiEventbriteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
