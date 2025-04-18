import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMiroIcon],svg[arcticons-miro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 5.5h5.322l10.58 10.205L11.072 42.5H5.5l5.071-24.354z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.643 5.5h5.322l9.767 6.73l-9.517 30.27h-5.572l4.759-26.795z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.786 5.5h5.322l9.392 5.916L33.358 42.5h-5.572l3.946-30.27z"></svg:path>`,
})
export class ArcticonsMiroIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
