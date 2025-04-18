import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiVanPassengerIcon],svg[mdi-van-passenger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7c-1.11 0-2 .89-2 2v8h2a3 3 0 0 0 3 3a3 3 0 0 0 3-3h6a3 3 0 0 0 3 3a3 3 0 0 0 3-3h2v-4c0-1.11-.89-2-2-2l-3-4zm0 1.5h4V11H3zm6 0h4V11H9zm6 0h2.5l1.96 2.5H15zm-9 7A1.5 1.5 0 0 1 7.5 17A1.5 1.5 0 0 1 6 18.5A1.5 1.5 0 0 1 4.5 17A1.5 1.5 0 0 1 6 15.5m12 0a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5"></svg:path>`,
})
export class MdiVanPassengerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
