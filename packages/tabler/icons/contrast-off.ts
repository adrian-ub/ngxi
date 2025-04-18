import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerContrastOffIcon],svg[tabler-contrast-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 12v5a4.98 4.98 0 0 0 3.522-1.45m1.392-2.623A5 5 0 0 0 12 7v1"></svg:path><svg:path d="M5.641 5.631A9 9 0 1 0 18.36 18.369m1.68-2.318A9 9 0 0 0 7.966 3.953M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerContrastOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
