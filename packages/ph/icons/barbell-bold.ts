import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBarbellBoldIcon],svg[ph-barbell-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 116V88a20 20 0 0 0-20-20h-16v-4a20 20 0 0 0-20-20h-24a20 20 0 0 0-20 20v52h-32V64a20 20 0 0 0-20-20H68a20 20 0 0 0-20 20v4H32a20 20 0 0 0-20 20v28a12 12 0 0 0 0 24v28a20 20 0 0 0 20 20h16v4a20 20 0 0 0 20 20h24a20 20 0 0 0 20-20v-52h32v52a20 20 0 0 0 20 20h24a20 20 0 0 0 20-20v-4h16a20 20 0 0 0 20-20v-28a12 12 0 0 0 0-24M36 164V92h12v72Zm52 24H72V68h16Zm96 0h-16V68h16Zm36-24h-12V92h12Z"></svg:path>`,
})
export class PhBarbellBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
