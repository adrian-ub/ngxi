import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleLineIconsFolderIcon],svg[simple-line-icons-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m354.752 176l78.624 77.248L453.488 272H960v576H64V176zM384 112H64c-35.344 0-64 28.656-64 64v672c0 35.344 28.656 64 64 64h896c35.344 0 64-28.656 64-64V272c0-35.344-28.656-64-64-64H480z"></svg:path>`,
})
export class SimpleLineIconsFolderIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
