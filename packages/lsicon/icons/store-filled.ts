import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconStoreFilledIcon],svg[lsicon-store-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 2a.5.5 0 0 0-.447.276l-1.5 3A.5.5 0 0 0 2 5.5v3a.5.5 0 0 0 .5.5H3v5h1V9h1.5v4.5a.5.5 0 0 0 .5.5h6.5a.5.5 0 0 0 .5-.5V9h.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.053-.224l-1.5-3A.5.5 0 0 0 12 2zm2.5 11V9H12v4zM6 6H5v2h1zm1.5 0h1v2h-1zM11 6h-1v2h1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconStoreFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
