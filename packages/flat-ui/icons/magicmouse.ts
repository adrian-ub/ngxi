import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatUiMagicmouseIcon],svg[flat-ui-magicmouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ECF0F1" fill-rule="evenodd" d="M89.837 10.178c12.099 12.099 14.173 29.64 2.075 41.738L51.916 91.911c-12.098 12.099-29.639 10.024-41.738-2.075C-1.921 77.739-3.996 60.198 8.103 48.099L48.099 8.103C60.197-3.996 77.738-1.921 89.837 10.178" clip-rule="evenodd"></svg:path><svg:circle cx="27.5" cy="74.5" r="5.5" fill="#DBE1E2"></svg:circle>`,
})
export class FlatUiMagicmouseIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
