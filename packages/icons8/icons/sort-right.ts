import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8SortRightIcon],svg[icons8-sort-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4.594v22.812l1.72-1.687l9-9l.686-.72l-.687-.72l-9-9zm2 4.843L20.563 16L14 22.563V9.438z"></svg:path>`,
})
export class Icons8SortRightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
