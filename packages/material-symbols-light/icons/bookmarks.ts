import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBookmarksIcon],svg[material-symbols-light-bookmarks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21V8.462q0-.667.475-1.141t1.14-.475h7.058q.667 0 1.141.475t.475 1.14V21l-5.135-2.654zm13-3.558V4.616q0-.27-.173-.443T17.385 4H7.789V3h9.596q.666 0 1.14.475T19 4.615v12.827z"></svg:path>`,
})
export class MaterialSymbolsLightBookmarksIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
