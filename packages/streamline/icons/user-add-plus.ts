import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineUserAddPlusIcon],svg[streamline-user-add-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 5.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m1.5 7h-6v-.542a4.51 4.51 0 0 1 6.5-4m3.5-.458v6m-3-3h6"></svg:path>`,
})
export class StreamlineUserAddPlusIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
