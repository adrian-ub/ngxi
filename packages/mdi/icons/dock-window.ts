import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDockWindowIcon],svg[mdi-dock-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 18v2H4a2 2 0 0 1-2-2V8h2v10M22 6v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2m-2 0H8v8h12Z"></svg:path>`,
})
export class MdiDockWindowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
