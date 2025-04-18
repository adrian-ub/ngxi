import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidUpAndDownIcon],svg[icon-park-solid-up-and-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M12 36v8h32V12h-8v8h-8v8h-8v8z"></svg:path><svg:path d="m18 13l9-9m-6 0h6v6M10 27H4v-6m9-3l-9 9"></svg:path></svg:g>`,
})
export class IconParkSolidUpAndDownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
