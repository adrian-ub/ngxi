import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFolderBlockBlockFolderSubtractIcon],svg[streamline-interface-folder-block-block-folder-subtract-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.75 12H1.5a1 1 0 0 1-1-1V1.5a1 1 0 0 1 1-1h3.69a1 1 0 0 1 1 .76l.28 1.24h6a1 1 0 0 1 1 1v1.75"></svg:path><svg:circle cx="10.25" cy="10.25" r="3.25"></svg:circle><svg:path d="m7.95 12.55l4.6-4.6"></svg:path></svg:g>`,
})
export class StreamlineInterfaceFolderBlockBlockFolderSubtractIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
