import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHelpOffIcon],svg[tabler-help-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5.641 5.631A9 9 0 1 0 18.36 18.369m1.68-2.318A9 9 0 0 0 7.966 3.953M12 17v.01"></svg:path><svg:path d="M12 13.5a1.5 1.5 0 0 1 .394-1.1m2.106-1.9a2.6 2.6 0 0 0-3.347-3.361M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerHelpOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
