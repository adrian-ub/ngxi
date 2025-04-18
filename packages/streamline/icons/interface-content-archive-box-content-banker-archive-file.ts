import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceContentArchiveBoxContentBankerArchiveFileIcon],svg[streamline-interface-content-archive-box-content-banker-archive-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 5.54h11v7a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-7h0Z"></svg:path><svg:rect width="4" height="13" x="5" y="-2.96" rx="1" transform="rotate(90 7 3.54)"></svg:rect><svg:path d="M5.5 8.54h3"></svg:path></svg:g>`,
})
export class StreamlineInterfaceContentArchiveBoxContentBankerArchiveFileIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
