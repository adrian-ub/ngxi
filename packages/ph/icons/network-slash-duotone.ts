import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNetworkSlashDuotoneIcon],svg[ph-network-slash-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M88 176v32a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8v-32a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8m56-144h-32a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8" opacity=".2"></svg:path><svg:path d="M96 54V40a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16h-16.39a8 8 0 0 1 0-16H144V40h-32v14a8 8 0 0 1-16 0m117.92 156.62a8 8 0 1 1-11.84 10.76L117.19 128H72v32h8a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h8v-32H24a8 8 0 0 1 0-16h78.64L42.08 45.38a8 8 0 1 1 11.84-10.76ZM80 176H48v32h32Zm152-64h-68a8 8 0 0 0 0 16h20v22.83a8 8 0 1 0 16 0V128h32a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhNetworkSlashDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
