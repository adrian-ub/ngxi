import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSdCard1Icon],svg[tdesign-sd-card-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2h12.515L21 9.68V22H3zm9 2h-1v3.5H9V4H8v3.5H6V4H5v16h14v-9.68L14.485 4H14v3.5h-2z"></svg:path>`,
})
export class TdesignSdCard1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
