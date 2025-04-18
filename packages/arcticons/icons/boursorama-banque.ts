import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBoursoramaBanqueIcon],svg[arcticons-boursorama-banque-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.584 41.5a6 6 0 0 1-6-6v-17h-17a6 6 0 0 1 0-12h23a6 6 0 0 1 6 6v23a6 6 0 0 1-6 6"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.584 41.5a6 6 0 0 1-4.242-10.242l23-23a6 6 0 1 1 8.484 8.484l-23 23a5.98 5.98 0 0 1-4.242 1.758"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.584 18.5v-6a6 6 0 0 1 6-6h0m-6 12h6a6 6 0 0 0 6-6h0"></svg:path>`,
})
export class ArcticonsBoursoramaBanqueIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
