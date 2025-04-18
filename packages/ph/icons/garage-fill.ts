import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGarageFillIcon],svg[ph-garage-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 192h-8V98.67a16 16 0 0 0-7.12-13.31l-88-58.67a16 16 0 0 0-17.75 0l-88 58.67A16 16 0 0 0 24 98.67V192h-8a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16m-104-64h56v24h-56Zm-16 24H64v-24h56Zm-56 16h56v24H64Zm72 0h56v24h-56Z"></svg:path>`,
})
export class PhGarageFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
