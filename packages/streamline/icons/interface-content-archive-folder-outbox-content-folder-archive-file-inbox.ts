import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceContentArchiveFolderOutboxContentFolderArchiveFileInboxIcon],svg[streamline-interface-content-archive-folder-outbox-content-folder-archive-file-inbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 9.54a1 1 0 0 0-1-1h-3v1h-5v-1h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1Zm-12-4h11m-11-3h11"></svg:path>`,
})
export class StreamlineInterfaceContentArchiveFolderOutboxContentFolderArchiveFileInboxIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
