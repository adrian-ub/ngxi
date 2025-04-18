import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsSplitVerticalUpMergeArrowDiagramIcon],svg[streamline-interface-arrows-split-vertical-up-merge-arrow-diagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m10 3.5l-3-3l-3 3m7 10a4 4 0 0 1-4-4a4 4 0 0 1-4 4m4-4v-9"></svg:path>`,
})
export class StreamlineInterfaceArrowsSplitVerticalUpMergeArrowDiagramIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
