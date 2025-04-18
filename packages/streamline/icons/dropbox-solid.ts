import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDropboxSolidIcon],svg[streamline-dropbox-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.313 3.132L3.655.84l3.343 2.292l-3.343 2.29l-3.344-2.29ZM10.344.84L7.001 3.132l3.343 2.29l3.344-2.29zm0 9.169L7 7.718l3.343-2.291h.001l3.344 2.291zM3.659 11.29L7.002 9l3.343 2.291l-3.343 2.291l-3.343-2.29Zm-.003-5.864L.312 7.718l3.344 2.291l3.343-2.291z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineDropboxSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
