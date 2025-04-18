import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenDirectionRtlFill12Icon],svg[garden-direction-rtl-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 2.5A2.5 2.5 0 0 0 6 5V0a2.5 2.5 0 0 0-2.5 2.5m-1 9.5c.06 0 .13-.01.19-.04c.19-.08.31-.26.31-.46v-4c0-.2-.12-.38-.31-.46a.47.47 0 0 0-.54.11L.5 8.79a.996.996 0 0 0 0 1.41l1.65 1.65c.09.1.22.15.35.15"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M8.5 7.5V1c0-.28-.22-.5-.5-.5H6.5v7m-5 2h10"></svg:path>`,
})
export class GardenDirectionRtlFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
