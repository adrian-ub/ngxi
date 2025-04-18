import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenUserGroupStroke16Icon],svg[garden-user-group-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="11" cy="6" r="2.5"></svg:circle><svg:circle cx="4.5" cy="3.5" r="2"></svg:circle><svg:path stroke-linecap="round" d="M15.5 14.5c-.2-2.2-2.2-4-4.5-4s-4.3 1.8-4.5 4m1-5c-.4-1.2-1.7-2-3-2s-2.6.8-3 2"></svg:path></svg:g>`,
})
export class GardenUserGroupStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
