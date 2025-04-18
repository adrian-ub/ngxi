import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditPathfinderOutlinePathfinderOutlineWorkIcon],svg[streamline-interface-edit-pathfinder-outline-pathfinder-outline-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.5 9.5a1 1 0 0 0 1-1m-5 1H6m3.5-5V6m-4-1.5a1 1 0 0 0-1 1"></svg:path><svg:path d="M.5 1.5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v3h3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-3h-3a1 1 0 0 1-1-1Zm7.5 3h1.5M4.5 8v1.5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditPathfinderOutlinePathfinderOutlineWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
