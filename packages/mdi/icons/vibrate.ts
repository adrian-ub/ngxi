import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiVibrateIcon],svg[mdi-vibrate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 19H8V5h8m.5-2h-9A1.5 1.5 0 0 0 6 4.5v15A1.5 1.5 0 0 0 7.5 21h9a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 16.5 3M19 17h2V7h-2m3 2v6h2V9M3 17h2V7H3m-3 8h2V9H0z"></svg:path>`,
})
export class MdiVibrateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
