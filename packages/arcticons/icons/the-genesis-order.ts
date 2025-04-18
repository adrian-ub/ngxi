import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTheGenesisOrderIcon],svg[arcticons-the-genesis-order-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="26.804" cy="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="18.696" ry="19.333"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.39 6.331v35.342M2.5 25.885l4.907-1.883h1.18l.223.211h36.688m-11.11 17.461l.509 1.316"></svg:path>`,
})
export class ArcticonsTheGenesisOrderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
