import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidBandageIcon],svg[fa6-solid-bandage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M480 416h96c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64h-96zM448 96H192v320h256zM64 96c-35.3 0-64 28.7-64 64v192c0 35.3 28.7 64 64 64h96V96zm184 112a24 24 0 1 1 48 0a24 24 0 1 1-48 0m120-24a24 24 0 1 1 0 48a24 24 0 1 1 0-48M248 304a24 24 0 1 1 48 0a24 24 0 1 1-48 0m120-24a24 24 0 1 1 0 48a24 24 0 1 1 0-48"></svg:path>`,
})
export class Fa6SolidBandageIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}
