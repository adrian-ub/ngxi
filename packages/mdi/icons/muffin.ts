import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMuffinIcon],svg[mdi-muffin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5s-1-3-4-3s-4 3-4 3C6 5 4 7 4 9c-2.7 0-2.7 4 0 4h16c2.7 0 2.7-4 0-4c0-2-2-4-4-4M5 15l2 7h2l-1-7zm5 0l1 7h2l1-7zm6 0l-1 7h2l2-7z"></svg:path>`,
})
export class MdiMuffinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
