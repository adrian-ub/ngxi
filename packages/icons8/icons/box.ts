import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8BoxIcon],svg[icons8-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5v6h1v16h22V11h1V5zm2 2h20v2H6zm1 4h18v14H7zm5.813 2A1 1 0 0 0 13 15h6a1 1 0 1 0 0-2h-6a1 1 0 0 0-.094 0a1 1 0 0 0-.094 0z"></svg:path>`,
})
export class Icons8BoxIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
