import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psOrkutIcon],svg[ps-orkut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 2Q137 2 69.5 69.5T2 232t67.5 162.5T232 462t162.5-67.5T462 232T394.5 69.5T232 2m0 387q-65 0-111-46T75 232t46-111t111-46t111 46t46 111t-46 111t-111 46"></svg:path>`,
})
export class PsOrkutIcon {
  readonly viewBox = input("0 0 464 488")
  readonly width = input("0.96em")
  readonly height = input("1em")
}
