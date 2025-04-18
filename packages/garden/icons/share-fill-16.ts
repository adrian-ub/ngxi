import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenShareFill16Icon],svg[garden-share-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M10.5 6.5H14c.28 0 .5.22.5.5v8c0 .28-.22.5-.5.5H1c-.28 0-.5-.22-.5-.5V7c0-.28.22-.5.5-.5h3.5m3 4V1"></svg:path><svg:path fill="currentColor" d="M10.5 4h-6c-.45 0-.67-.54-.35-.85L6.79.5A.996.996 0 0 1 8.2.5l2.65 2.65c.32.31.1.85-.35.85"></svg:path>`,
})
export class GardenShareFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
