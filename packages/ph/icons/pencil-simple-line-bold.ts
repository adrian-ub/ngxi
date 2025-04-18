import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPencilSimpleLineBoldIcon],svg[ph-pencil-simple-line-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m230.15 70.54l-44.69-44.68a20 20 0 0 0-28.28 0L33.86 149.17A19.86 19.86 0 0 0 28 163.31V208a20 20 0 0 0 20 20h168a12 12 0 0 0 0-24h-91L230.15 98.83a20 20 0 0 0 0-28.29M91 204H52v-39l84-84l39 39Zm101-101l-39-39l18.34-18.34l39 39Z"></svg:path>`,
})
export class PhPencilSimpleLineBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
