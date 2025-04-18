import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBook4OutlineIcon],svg[material-symbols-light-book-4-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.23 21q-.929 0-1.58-.64Q4 19.722 4 18.809V5.23q0-.93.65-1.58Q5.302 3 6.23 3h10.386v14.616H6.23q-.502 0-.866.341Q5 18.3 5 18.804t.365.85t.866.346H19V5h1v16zm2.155-4.384h7.23V4h-7.23zm-1 0V4H6.23q-.523 0-.877.365Q5 4.728 5 5.23v11.79q.27-.171.574-.288t.657-.117zM5 4v13.021z"></svg:path>`,
})
export class MaterialSymbolsLightBook4OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
