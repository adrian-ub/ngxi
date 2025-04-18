import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineWineSolidIcon],svg[streamline-wine-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.897 1.528a.18.18 0 0 0-.18.158a38 38 0 0 0-.126 1.883h6.818a38 38 0 0 0-.125-1.883a.18.18 0 0 0-.18-.158zm.006-1.5a1.68 1.68 0 0 0-1.678 1.496v.008A40 40 0 0 0 2.061 4.5c0 1.428.555 2.576 1.494 3.353c.74.613 1.681.964 2.694 1.078v3.475H5a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5H7.75V8.931c1.013-.114 1.953-.464 2.694-1.078c.94-.777 1.493-1.925 1.493-3.353c0-.443-.056-1.91-.161-2.968l-.001-.008A1.68 1.68 0 0 0 10.097.028h.002v.75l-.005-.75h.003z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineWineSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
