import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenIndentDecreaseFill12Icon],svg[garden-indent-decrease-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M10 1H2m8 3H6m4 3H6m4 3H2"></svg:path><svg:path fill="currentColor" d="M3.5 8c.06 0 .13-.01.19-.04c.19-.08.31-.26.31-.46v-4c0-.2-.12-.38-.31-.46a.47.47 0 0 0-.54.11L1.5 4.79a.996.996 0 0 0 0 1.41l1.65 1.65c.09.1.22.15.35.15"></svg:path>`,
})
export class GardenIndentDecreaseFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
