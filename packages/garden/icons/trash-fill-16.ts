import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenTrashFill16Icon],svg[garden-trash-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M3 2.5h10"></svg:path><svg:path fill="currentColor" d="M3 4v11c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V4zm4 9.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-7c0-.28.22-.5.5-.5s.5.22.5.5zm3 0c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-7c0-.28.22-.5.5-.5s.5.22.5.5zM10 3H6V1c0-.55.45-1 1-1h2c.55 0 1 .45 1 1z"></svg:path>`,
})
export class GardenTrashFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
