import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPerfectPianoIcon],svg[arcticons-perfect-piano-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 13.439h2.552v16.249h3.268V13.439h2.474v16.249h3.268V13.439h8.277v16.249h3.268V13.439h2.29v16.249h3.268V13.439h2.291v16.249h3.268V13.439H42.5M9.686 29.688V42.5m5.742-12.812V42.5m5.681-29.061V42.21m5.864-12.522V42.5m5.558-12.812V42.5m5.559-12.812V42.5"></svg:path>`,
})
export class ArcticonsPerfectPianoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
