import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFolderZipIcon],svg[hugeicons-folder-zip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12 7l-.633-1.267c-.525-1.05-1.005-2.106-2.168-2.542C8.69 3 8.108 3 6.944 3c-1.816 0-2.724 0-3.406.38A3 3 0 0 0 2.38 4.538C2 5.22 2 6.128 2 7.944V11c0 4.714 0 7.071 1.464 8.535C4.93 21 7.286 21 12 21h1.25c3.511 0 5.267 0 6.528-.843a5 5 0 0 0 1.38-1.38C22 17.518 22 15.762 22 12.25c0-2.107 0-3.16-.506-3.917a3 3 0 0 0-.827-.827c-.51-.341-1.155-.452-2.167-.489M12 7H7m5 0c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v1m0 0v4m0-4h-1.5m1.5 0h1.5M15 15h-1.5m1.5 0h1.5" color="currentColor"></svg:path>`,
})
export class HugeiconsFolderZipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
