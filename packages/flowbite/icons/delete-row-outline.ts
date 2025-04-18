import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteDeleteRowOutlineIcon],svg[flowbite-delete-row-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3M3 15V6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v9M3 15h18M8 15v4m4-4v4m4-4v4m-5.506-7.494L12 10m0 0l1.506-1.506M12 10l1.506 1.506M12 10l-1.506-1.506"></svg:path>`,
})
export class FlowbiteDeleteRowOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
