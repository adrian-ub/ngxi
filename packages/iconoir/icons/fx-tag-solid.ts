import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirFxTagSolidIcon],svg[iconoir-fx-tag-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 2.25A6.75 6.75 0 0 0 1.25 9v6A6.75 6.75 0 0 0 8 21.75h8A6.75 6.75 0 0 0 22.75 15V9A6.75 6.75 0 0 0 16 2.25zm-2 6a.75.75 0 0 0-.75.75v6a.75.75 0 0 0 1.5 0v-2.25h2.821a.75.75 0 0 0 0-1.5H6.75v-1.5H11a.75.75 0 0 0 0-1.5zm7.576.27a.75.75 0 1 0-1.152.96l2.1 2.52l-2.1 2.52a.75.75 0 1 0 1.152.96l1.924-2.308l1.924 2.308a.75.75 0 1 0 1.152-.96l-2.1-2.52l2.1-2.52a.75.75 0 1 0-1.152-.96L15.5 10.829z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirFxTagSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
