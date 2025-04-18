import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMemoryThinIcon],svg[ph-memory-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 60H24a12 12 0 0 0-12 12v128a4 4 0 0 0 8 0v-20h24v20a4 4 0 0 0 8 0v-20h24v20a4 4 0 0 0 8 0v-20h24v20a4 4 0 0 0 8 0v-20h24v20a4 4 0 0 0 8 0v-20h24v20a4 4 0 0 0 8 0v-20h24v20a4 4 0 0 0 8 0v-20h24v20a4 4 0 0 0 8 0V72a12 12 0 0 0-12-12M20 72a4 4 0 0 1 4-4h208a4 4 0 0 1 4 4v100H20Zm92 76a4 4 0 0 0 4-4V96a4 4 0 0 0-4-4H48a4 4 0 0 0-4 4v48a4 4 0 0 0 4 4Zm-60-48h56v40H52Zm92 48h64a4 4 0 0 0 4-4V96a4 4 0 0 0-4-4h-64a4 4 0 0 0-4 4v48a4 4 0 0 0 4 4m4-48h56v40h-56Z"></svg:path>`,
})
export class PhMemoryThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
