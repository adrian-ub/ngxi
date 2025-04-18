import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineLocalStorageFolderIcon],svg[streamline-local-storage-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.82 1.953H1a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5V7.234M6 10.953l-1 2.5m3-2.5l1 2.5m-5 0h6"></svg:path><svg:path d="M13.43 5.112c0 .24-.195.435-.435.435h-4.77a.435.435 0 0 1-.434-.435V.982a.435.435 0 0 1 .435-.435H9.83a.435.435 0 0 1 .435.33l.122.54h2.608a.435.435 0 0 1 .435.434z"></svg:path></svg:g>`,
})
export class StreamlineLocalStorageFolderIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
