import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phResizeBoldIcon],svg[ph-resize-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 108H48a12 12 0 0 0-12 12v88a12 12 0 0 0 12 12h88a12 12 0 0 0 12-12v-88a12 12 0 0 0-12-12m-12 88H60v-64h64Zm96-8v12a20 20 0 0 1-20 20h-20a12 12 0 0 1 0-24h16v-8a12 12 0 0 1 24 0m0-72v24a12 12 0 0 1-24 0v-24a12 12 0 0 1 24 0m0-60v16a12 12 0 0 1-24 0V60h-12a12 12 0 0 1 0-24h16a20 20 0 0 1 20 20m-68-8a12 12 0 0 1-12 12h-24a12 12 0 0 1 0-24h24a12 12 0 0 1 12 12M36 76V56a20 20 0 0 1 20-20h12a12 12 0 0 1 0 24h-8v16a12 12 0 0 1-24 0"></svg:path>`,
})
export class PhResizeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
