import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsPassLightIcon],svg[lets-icons-pass-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.5 5.5a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1z"></svg:path><svg:circle cx="12" cy="10" r="3.5"></svg:circle><svg:path d="M13.5 10c0 1.044-.213 1.964-.533 2.605c-.335.67-.706.895-.967.895c-.26 0-.632-.225-.967-.895c-.32-.641-.533-1.561-.533-2.605s.213-1.964.533-2.605c.335-.67.706-.895.967-.895c.26 0 .632.224.967.895c.32.641.533 1.561.533 2.605"></svg:path></svg:g>`,
})
export class LetsIconsPassLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
