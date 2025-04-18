import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPenBoldIcon],svg[ph-pen-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m230.15 70.54l-44.69-44.68a20 20 0 0 0-28.28 0L33.86 149.17A19.86 19.86 0 0 0 28 163.31V208a20 20 0 0 0 20 20h44.69a19.85 19.85 0 0 0 14.14-5.86l79.46-79.45l4.16 13.89l-34.93 34.93a12 12 0 0 0 17 17l40-40a12 12 0 0 0 3-11.94l-9.94-33.13l24.59-24.59a20 20 0 0 0-.02-28.31M65 152l71-71l39 39l-71 71Zm-13 21l31 31H52Zm140-70l-39-39l18.34-18.34l39 39Z"></svg:path>`,
})
export class PhPenBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
