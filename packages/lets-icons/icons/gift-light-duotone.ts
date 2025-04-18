import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsGiftLightDuotoneIcon],svg[lets-icons-gift-light-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M5 8h14v8c0 1.886 0 2.828-.586 3.414S16.886 20 15 20H9c-1.886 0-2.828 0-3.414-.586S5 17.886 5 16z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="m12 8l-.24-2.153A2.654 2.654 0 0 0 9.124 3.5v0C7.683 3.5 6.5 4.667 6.5 6.106v0c0 .87.435 1.684 1.16 2.168L9.5 9.5M12 8l.24-2.153A2.654 2.654 0 0 1 14.876 3.5v0c1.44 0 2.623 1.167 2.623 2.606v0c0 .87-.435 1.684-1.16 2.168L14.5 9.5"></svg:path><svg:rect width="16" height="3" x="4" y="8" fill="currentColor" rx="1"></svg:rect><svg:path stroke="currentColor" stroke-linecap="round" d="M12 11v4"></svg:path></svg:g>`,
})
export class LetsIconsGiftLightDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
