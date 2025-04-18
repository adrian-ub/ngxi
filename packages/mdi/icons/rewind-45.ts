import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRewind45Icon],svg[mdi-rewind-45-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 3c4.6 0 8.6 3 10 7.2l-2.4.8C19 7.8 16 5.5 12.5 5.5c-2 0-3.7.7-5.1 1.9L10 10H3V3l2.6 2.6C7.4 4 9.9 3 12.5 3m.5 9h6v2h-4v2h2c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2h-4v-2h4v-2h-4zm-8 0v6h4v4h2V12H9v4H7v-4z"></svg:path>`,
})
export class MdiRewind45Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
