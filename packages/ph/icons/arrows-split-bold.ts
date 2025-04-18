import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowsSplitBoldIcon],svg[ph-arrows-split-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m232.49 192.49l-32 32a12 12 0 0 1-17 0l-32-32a12 12 0 0 1 17-17L180 187v-46l-52-52l-52 52v46l11.51-11.52a12 12 0 0 1 17 17l-32 32a12 12 0 0 1-17 0l-32-32a12 12 0 1 1 17-17L52 187v-51a12 12 0 0 1 3.51-8.49L116 67V24a12 12 0 0 1 24 0v43l60.49 60.48A12 12 0 0 1 204 136v51l11.51-11.52a12 12 0 0 1 17 17Z"></svg:path>`,
})
export class PhArrowsSplitBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
