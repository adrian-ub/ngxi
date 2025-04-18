import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLibraryBooksRoundedIcon],svg[material-symbols-light-library-books-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 13.5h2.48q.213 0 .357-.144t.144-.357t-.144-.356t-.356-.143H10.5q-.213 0-.356.144t-.144.357t.144.356t.356.143m0-3h5.962q.212 0 .356-.144t.143-.357t-.143-.356t-.357-.143H10.5q-.213 0-.356.144t-.144.357t.144.356t.356.143m0-3h5.962q.212 0 .356-.144t.143-.357t-.143-.356t-.357-.143H10.5q-.213 0-.356.144T10 7.001t.144.356t.356.143M8.116 17q-.691 0-1.153-.462T6.5 15.385V4.615q0-.69.463-1.153T8.116 3h10.769q.69 0 1.153.462t.462 1.153v10.77q0 .69-.462 1.152T18.884 17zm-3 3q-.691 0-1.153-.462T3.5 18.385V7.115q0-.212.144-.356t.357-.143t.356.143t.143.357v11.269q0 .23.192.423t.423.192h11.27q.212 0 .356.144t.143.357t-.143.356t-.357.143z"></svg:path>`,
})
export class MaterialSymbolsLightLibraryBooksRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
