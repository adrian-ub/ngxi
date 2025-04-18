import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNetworkSlashFillIcon],svg[ph-network-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M98.08 59.41A8 8 0 0 1 96 54V40a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16h-16.39a8 8 0 0 1-5.92-2.62ZM53.92 34.62a8 8 0 1 0-11.84 10.76L102.64 112H24a8 8 0 0 0 0 16h32v32h-8a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-8v-32h45.19l84.89 93.38a8 8 0 1 0 11.84-10.76ZM232 112h-68a8 8 0 0 0 0 16h20v22.83a8 8 0 1 0 16 0V128h32a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhNetworkSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
