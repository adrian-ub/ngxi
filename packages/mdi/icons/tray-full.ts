import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTrayFullIcon],svg[mdi-tray-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 5H6v2h12M6 9h12v2H6m-4 1h2v5h16v-5h2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2m16-4H6v2h12Z"></svg:path>`,
})
export class MdiTrayFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
