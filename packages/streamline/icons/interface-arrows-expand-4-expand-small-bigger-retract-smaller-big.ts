import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsExpand4ExpandSmallBiggerRetractSmallerBigIcon],svg[streamline-interface-arrows-expand-4-expand-small-bigger-retract-smaller-big-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="10" height="10" x="3.5" y=".5" rx="1" transform="rotate(180 8.5 5.5)"></svg:rect><svg:path d="M10.5 13.5h-9a1 1 0 0 1-1-1v-9m7 0h3v3m0-3l-4 4"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsExpand4ExpandSmallBiggerRetractSmallerBigIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
