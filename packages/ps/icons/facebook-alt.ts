import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psFacebookAltIcon],svg[ps-facebook-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M462 78q0-30-23-53T386 2H78Q48 2 25 25T2 78v308q0 30 23 53t53 23h154V288h-56v-76h56v-30q0-39 25.5-68.5T318 84h62v76h-62q-5 0-9.5 6t-4.5 15v31h76v76h-76v174h82q30 0 53-23t23-53z"></svg:path>`,
})
export class PsFacebookAltIcon {
  readonly viewBox = input("0 0 464 488")
  readonly width = input("0.96em")
  readonly height = input("1em")
}
