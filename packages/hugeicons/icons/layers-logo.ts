import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLayersLogoIcon],svg[hugeicons-layers-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9.879 20.121C10.757 21 12.172 21 15 21s4.243 0 5.121-.879C21 19.243 21 17.828 21 15s0-4.243-.879-5.121C19.243 9 17.828 9 15 9s-4.243 0-5.121.879C9 10.757 9 12.172 9 15s0 4.243.879 5.121"></svg:path><svg:path d="M17.924 9c-.096-.975-.313-1.631-.803-2.121C16.243 6 14.828 6 12 6s-4.243 0-5.121.879C6 7.757 6 9.172 6 12s0 4.243.879 5.121c.49.49 1.146.707 2.121.803"></svg:path><svg:path d="M14.924 6c-.096-.975-.313-1.631-.803-2.121C13.243 3 11.828 3 9 3s-4.243 0-5.121.879C3 4.757 3 6.172 3 9s0 4.243.879 5.121c.49.49 1.146.707 2.121.803"></svg:path></svg:g>`,
})
export class HugeiconsLayersLogoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
