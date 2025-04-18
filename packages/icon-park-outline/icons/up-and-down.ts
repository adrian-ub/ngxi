import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineUpAndDownIcon],svg[icon-park-outline-up-and-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M12 36v8h32V12h-8v8h-8v8h-8v8zm6-23l9-9m-6 0h6v6M10 27H4v-6m9-3l-9 9"></svg:path>`,
})
export class IconParkOutlineUpAndDownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
