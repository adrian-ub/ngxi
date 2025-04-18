import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsShortcutToUrlIcon],svg[arcticons-shortcut-to-url-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29l-4 4v29l4 4h29l4-4v-29z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.848 38.896c-7.728-4.517-1.827-9.443 7.115-15.185l6.778 6.433V11.538H18.135l5.93 5.93c-15.688 14.79-10.352 18.36-1.217 21.428"></svg:path>`,
})
export class ArcticonsShortcutToUrlIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
