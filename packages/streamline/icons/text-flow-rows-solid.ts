import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTextFlowRowsSolidIcon],svg[streamline-text-flow-rows-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 0a.5.5 0 0 0-.5.5v3A.5.5 0 0 0 1 4h3a.5.5 0 0 0 .5-.5v-.75h5v.69L3.44 9.5H1a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-.75h6v1.25a.5.5 0 0 0 .854.354l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 0 0-.854.354v1.25h-6v-.19L11.06 4H13a.5.5 0 0 0 .5-.5v-3A.5.5 0 0 0 13 0h-3a.5.5 0 0 0-.5.5v.75h-5V.5A.5.5 0 0 0 4 0z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineTextFlowRowsSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
