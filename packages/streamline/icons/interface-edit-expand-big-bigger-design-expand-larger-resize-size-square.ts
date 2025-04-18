import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditExpandBigBiggerDesignExpandLargerResizeSizeSquareIcon],svg[streamline-interface-edit-expand-big-bigger-design-expand-larger-resize-size-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.5.5h1a1 1 0 0 1 1 1v1m-13 0v-1a1 1 0 0 1 1-1h1m3 0h3m5 5v3m-13-3v3m11 5h1a1 1 0 0 0 1-1v-1m-13 0v1a1 1 0 0 0 1 1h1m3 0h3"></svg:path><svg:rect width="6" height="6" x="4" y="4" rx="1"></svg:rect></svg:g>`,
})
export class StreamlineInterfaceEditExpandBigBiggerDesignExpandLargerResizeSizeSquareIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
