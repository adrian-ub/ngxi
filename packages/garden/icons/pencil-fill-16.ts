import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenPencilFill16Icon],svg[garden-pencil-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.04 2.75l-9.9 9.9A.5.5 0 0 0 0 13v2.5c0 .28.22.5.5.5H3c.13 0 .26-.05.35-.15l9.9-9.9zm5.46-.46L13.71.5a.996.996 0 0 0-1.41 0l-1.54 1.54l3.21 3.21l1.54-1.54c.38-.39.38-1.03-.01-1.42"></svg:path>`,
})
export class GardenPencilFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
