import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiForkliftIcon],svg[mdi-forklift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4v7H4c-1.11 0-2 .89-2 2v4a3 3 0 0 0 3 3a3 3 0 0 0 3-3h2a3 3 0 0 0 3 3a3 3 0 0 0 3-3v-4l-4-9zm11 1v14h5v-1.5h-3.5V5zm-9.5.5h3.7l3.3 7.5h-7zM5 15.5A1.5 1.5 0 0 1 6.5 17A1.5 1.5 0 0 1 5 18.5A1.5 1.5 0 0 1 3.5 17A1.5 1.5 0 0 1 5 15.5m8 0a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5"></svg:path>`,
})
export class MdiForkliftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
