import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPencilSimpleBoldIcon],svg[ph-pencil-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m230.14 70.54l-44.68-44.69a20 20 0 0 0-28.29 0L33.86 149.17A19.85 19.85 0 0 0 28 163.31V208a20 20 0 0 0 20 20h44.69a19.86 19.86 0 0 0 14.14-5.86L230.14 98.82a20 20 0 0 0 0-28.28M91 204H52v-39l84-84l39 39Zm101-101l-39-39l18.34-18.34l39 39Z"></svg:path>`,
})
export class PhPencilSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
