import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRewind5Icon],svg[mdi-rewind-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 3c4.65 0 8.58 3.03 9.97 7.22L20.1 11c-1.05-3.19-4.06-5.5-7.6-5.5c-1.96 0-3.73.72-5.12 1.88L10 10H3V3l2.6 2.6C7.45 4 9.85 3 12.5 3M9 12h6v2h-4v2h2a2 2 0 0 1 2 2v2c0 1.11-.89 2-2 2H9v-2h4v-2H9z"></svg:path>`,
})
export class MdiRewind5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
