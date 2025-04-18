import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phToolboxBoldIcon],svg[ph-toolbox-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 64h-44v-8a28 28 0 0 0-28-28h-48a28 28 0 0 0-28 28v8H32a20 20 0 0 0-20 20v108a20 20 0 0 0 20 20h192a20 20 0 0 0 20-20V84a20 20 0 0 0-20-20m-124-8a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4v8h-56Zm120 32v32h-24v-4a12 12 0 0 0-24 0v4H84v-4a12 12 0 0 0-24 0v4H36V88ZM36 188v-44h24v4a12 12 0 0 0 24 0v-4h88v4a12 12 0 0 0 24 0v-4h24v44Z"></svg:path>`,
})
export class PhToolboxBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
