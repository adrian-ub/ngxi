import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTableKeyIcon],svg[mdi-table-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.8 17c-.4-1.2-1.5-2-2.8-2c-1.7 0-3 1.3-3 3s1.3 3 3 3c1.3 0 2.4-.8 2.8-2H19v2h2v-2h2v-2zM14 19c-.6 0-1-.5-1-1s.4-1 1-1s1 .5 1 1s-.4 1-1 1m-5-1H4v-4h6v1c.9-1.2 2.4-2 4-2c1.1 0 2.1.4 3 1h1v1h2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5.4c-.3-.6-.4-1.3-.4-2m3-10h6v4h-6zM4 8h6v4H4z"></svg:path>`,
})
export class MdiTableKeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
