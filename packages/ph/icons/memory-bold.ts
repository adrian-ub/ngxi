import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMemoryBoldIcon],svg[ph-memory-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 52H24A20 20 0 0 0 4 72v128a12 12 0 0 0 24 0v-12h20v12a12 12 0 0 0 24 0v-12h20v12a12 12 0 0 0 24 0v-12h24v12a12 12 0 0 0 24 0v-12h20v12a12 12 0 0 0 24 0v-12h20v12a12 12 0 0 0 24 0V72a20 20 0 0 0-20-20M28 76h200v88H28Zm92 64v-40a12 12 0 0 0-12-12H56a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12h52a12 12 0 0 0 12-12m-24-12H68v-16h28Zm52 24h52a12 12 0 0 0 12-12v-40a12 12 0 0 0-12-12h-52a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12m12-40h28v16h-28Z"></svg:path>`,
})
export class PhMemoryBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
