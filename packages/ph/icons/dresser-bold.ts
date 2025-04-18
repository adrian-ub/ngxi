import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phDresserBoldIcon],svg[ph-dresser-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148 176a12 12 0 0 1-12 12h-16a12 12 0 0 1 0-24h16a12 12 0 0 1 12 12m-28-84h16a12 12 0 0 0 0-24h-16a12 12 0 0 0 0 24m100-52v176a20 20 0 0 1-20 20H56a20 20 0 0 1-20-20V40a20 20 0 0 1 20-20h144a20 20 0 0 1 20 20M60 44v72h136V44Zm136 168v-72H60v72Z"></svg:path>`,
})
export class PhDresserBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
