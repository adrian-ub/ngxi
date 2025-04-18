import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFolderFileStorageIcon],svg[hugeicons-folder-file-storage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 6.5h9.75c2.107 0 3.16 0 3.917.506a3 3 0 0 1 .827.827c.464.694.503 1.427.506 3.167M12 6.5l-.633-1.267c-.525-1.05-1.005-2.106-2.168-2.542C8.69 2.5 8.108 2.5 6.944 2.5c-1.816 0-2.724 0-3.406.38A3 3 0 0 0 2.38 4.038C2 4.72 2 5.628 2 7.444V10.5c0 4.714 0 7.071 1.464 8.535c1.3 1.3 3.304 1.447 7.036 1.463h.5m6.556 1.002h.888c1.677 0 2.515 0 3.035-.527C22 20.446 22 19.597 22 17.9v-.309c0-.736 0-1.104-.135-1.434c-.136-.331-.393-.591-.906-1.111l-1.31-1.327c-.417-.421-.625-.632-.864-.788a2.7 2.7 0 0 0-.882-.37c-.278-.061-.573-.061-1.162-.061c-.898 0-1.347 0-1.697.16c-.393.18-.707.5-.885.897c-.159.354-.159.809-.159 1.718V17.9c0 1.697 0 2.546.52 3.073c.521.527 1.36.527 3.036.527" color="currentColor"></svg:path>`,
})
export class HugeiconsFolderFileStorageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
