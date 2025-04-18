import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBookmarksRoundedIcon],svg[material-symbols-light-bookmarks-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.154 18.346L6.18 20.391q-.404.211-.792-.019q-.389-.23-.389-.69V8.463q0-.667.475-1.141t1.14-.475h7.058q.667 0 1.141.475t.475 1.14v11.222q0 .46-.389.689q-.388.23-.792.019zm8.345-.904q-.212 0-.356-.143T18 16.942V4.616q0-.27-.173-.443T17.385 4H8.289q-.213 0-.357-.144t-.143-.357t.143-.356T8.29 3h9.096q.666 0 1.14.475T19 4.615v12.327q0 .213-.144.357t-.357.143"></svg:path>`,
})
export class MaterialSymbolsLightBookmarksRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
