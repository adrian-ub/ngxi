import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCarInfoIcon],svg[mdi-car-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 15h-2v-2h2m1 7v2h-4v-2h1v-2h-1v-2h3v4m-.08-15a1.5 1.5 0 0 0-1.42-1h-11a1.5 1.5 0 0 0-1.42 1L3 11v8a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h5a7 7 0 0 1 7-7a6.84 6.84 0 0 1 3 .68V11M6.5 15A1.5 1.5 0 1 1 8 13.5A1.5 1.5 0 0 1 6.5 15M5 10l1.5-4.5h11L19 10Z"></svg:path>`,
})
export class MdiCarInfoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
