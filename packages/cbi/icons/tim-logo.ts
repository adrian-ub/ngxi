import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiTimLogoIcon],svg[cbi-tim-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.993 17.964v1.172a1.243 1.243 0 0 0 1.244 1.243h6.815v-3.658H3.237a1.243 1.243 0 0 0-1.244 1.243m18.784-1.243h-6.843v3.658h6.843a1.24 1.24 0 0 0 1.243-1.243v-1.172a1.24 1.24 0 0 0-1.243-1.243M1.98 11.411v1.172a1.24 1.24 0 0 0 1.243 1.243h6.829v-3.658H3.223a1.243 1.243 0 0 0-1.243 1.243m18.783-1.243h-6.829v3.658h6.829a1.243 1.243 0 0 0 1.244-1.243v-1.172a1.244 1.244 0 0 0-1.244-1.243M3.223 3.621h17.541a1.24 1.24 0 0 1 1.243 1.243v1.172a1.24 1.24 0 0 1-1.243 1.243H3.223A1.24 1.24 0 0 1 1.98 6.036V4.864a1.24 1.24 0 0 1 1.243-1.243" class="cls-1"></svg:path>`,
})
export class CbiTimLogoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
