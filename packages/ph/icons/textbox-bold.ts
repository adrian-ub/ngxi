import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTextboxBoldIcon],svg[ph-textbox-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112 36a12 12 0 0 0-12 12v12H24A20 20 0 0 0 4 80v96a20 20 0 0 0 20 20h76v12a12 12 0 0 0 24 0V48a12 12 0 0 0-12-12M28 172V84h72v88Zm224-92v96a20 20 0 0 1-20 20h-80a12 12 0 0 1 0-24h76V84h-76a12 12 0 0 1 0-24h80a20 20 0 0 1 20 20M88 112a12 12 0 0 1-12 12v20a12 12 0 0 1-24 0v-20a12 12 0 0 1 0-24h24a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhTextboxBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
