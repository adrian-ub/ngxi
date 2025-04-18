import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDiceD4Icon],svg[mdi-dice-d4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.25 15.15l1.67-2.68v2.68zM21.92 21H2.08c-.84 0-1.36-.92-.92-1.64l9.92-16.23c.42-.69 1.42-.69 1.84 0l9.92 16.23c.44.72-.08 1.64-.92 1.64m-7.63-5.85h-.86v-4.73h-1.52l-3.16 4.99l.07.95h3.1V18h1.51v-1.64h.86z"></svg:path>`,
})
export class MdiDiceD4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
