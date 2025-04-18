import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenMinimizeFill12Icon],svg[garden-minimize-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4H.5c-.2 0-.38-.12-.46-.31s-.04-.4.11-.54l3-3c.14-.15.35-.19.54-.11S4 .3 4 .5V3c0 .55-.45 1-1 1m6 0h2.5a.499.499 0 0 0 .35-.85l-3-3a.47.47 0 0 0-.54-.11C8.12.12 8 .3 8 .5V3c0 .55.45 1 1 1m0 4h2.5a.499.499 0 0 1 .35.85l-3 3c-.14.15-.35.19-.54.11A.5.5 0 0 1 8 11.5V9c0-.55.45-1 1-1M3 8H.5c-.2 0-.38.12-.46.31s-.04.4.11.54l3 3c.14.15.35.19.54.11S4 11.7 4 11.5V9c0-.55-.45-1-1-1"></svg:path>`,
})
export class GardenMinimizeFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
