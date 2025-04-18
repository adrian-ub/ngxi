import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteDeleteTableOutlineIcon],svg[flowbite-delete-table-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15v3a1 1 0 0 0 1 1h10.5M3 15v-4m0 4h11M3 11V6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v5M3 11h18m0 0v1M8 11v8m4-8v8m4-8v2m1.896 5.953l1.504-1.505m0 0l1.505-1.505M19.4 17.448l1.46 1.46m-1.46-1.46l-1.46-1.46"></svg:path>`,
})
export class FlowbiteDeleteTableOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
