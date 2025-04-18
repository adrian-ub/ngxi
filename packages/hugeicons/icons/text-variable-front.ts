import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTextVariableFrontIcon],svg[hugeicons-text-variable-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7.5 15h-3M6 3v12M6 3c-.793 0-1.811.114-2.622.227c-.343.048-.514.072-.666.156c-.316.175-.57.558-.666 1.004C2 4.6 2 4.845 2 5.333M6 3c.793 0 1.811.114 2.622.227c.343.048.514.072.666.156c.316.175.57.558.666 1.004c.046.214.046.458.046.946M19.5 15h-3M18 3v12m0-12c-.793 0-1.811.114-2.622.227c-.343.048-.514.072-.666.156c-.316.175-.57.558-.666 1.004C14 4.6 14 4.845 14 5.333M18 3c.793 0 1.811.114 2.622.227c.343.048.514.072.666.156c.316.175.57.558.666 1.004c.046.214.046.458.046.946M2 19h8m4 0h8"></svg:path><svg:circle cx="12" cy="19" r="2"></svg:circle></svg:g>`,
})
export class HugeiconsTextVariableFrontIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
