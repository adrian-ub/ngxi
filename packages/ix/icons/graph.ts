import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixGraphIcon],svg[ix-graph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m320 60.54l79.376 238.128H448v42.666h-79.376L320 195.463l-85.333 256l-64-192l-27.291 81.871H64v-42.666h48.624l58.043-174.129l64 192z" clip-rule="evenodd"></svg:path>`,
})
export class IxGraphIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
