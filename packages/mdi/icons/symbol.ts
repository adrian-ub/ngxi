import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSymbolIcon],svg[mdi-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7v7h2V7zm4 0v2h4v2H8v3h2v-1c1.11 0 2-.89 2-2V9c0-1.11-.89-2-2-2zm9.8 0l-.2 2H14v2h1.4l-.2 2H14v2h1l-.2 2h2l.2-2h1.4l-.2 2h2l.2-2H22v-2h-1.4l.2-2H22V9h-1l.2-2h-2L19 9h-1.4l.2-2zm1.6 4h1.4l-.2 2h-1.4zM2 15v2h2v-2zm6 0v2h2v-2z"></svg:path>`,
})
export class MdiSymbolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
