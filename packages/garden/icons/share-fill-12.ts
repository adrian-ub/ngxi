import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenShareFill12Icon],svg[garden-share-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M5.5 7.5V1m2 3.5H10c.28 0 .5.22.5.5v6c0 .28-.22.5-.5.5H1c-.28 0-.5-.22-.5-.5V5c0-.28.22-.5.5-.5h2.5"></svg:path><svg:path fill="currentColor" d="M8 2.5c0 .06-.01.13-.04.19c-.08.19-.26.31-.46.31h-4c-.2 0-.38-.12-.46-.31s-.04-.4.11-.54L4.79.5A.996.996 0 0 1 6.2.5l1.65 1.65c.1.09.15.22.15.35"></svg:path>`,
})
export class GardenShareFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
