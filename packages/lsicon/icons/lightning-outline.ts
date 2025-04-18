import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconLightningOutlineIcon],svg[lsicon-lightning-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" d="m3 8.5l5.5-7v6H12l-5.5 7v-6z"></svg:path>`,
})
export class LsiconLightningOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
