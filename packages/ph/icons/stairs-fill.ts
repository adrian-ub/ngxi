import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phStairsFillIcon],svg[ph-stairs-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m-40 80h40v24h-40Zm-48 40h88v24h-88Zm88 72H56v-32h144z"></svg:path>`,
})
export class PhStairsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
