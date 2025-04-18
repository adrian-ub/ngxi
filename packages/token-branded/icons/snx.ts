import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedSnxIcon],svg[token-branded-snx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#1B1230"><svg:path fill-opacity=".45" d="m5.363 19.143l10.249-14.26c.484-.855 2.34-.646 3.116-.343L8.676 18.518c-.41.647-2.441.692-3.319.62z"></svg:path><svg:path d="M13.086 10.594c.557.017 1.035.827 1.035 1.406c0 .58-.478 1.39-1.035 1.406h-2.75c-2.644-.034-5.08-2.655-5.08-5.35c0-2.7 2.436-5.022 5.08-5.056h7.093c.557.017 1.322.484 1.322 1.378c0 .889-.467 1.406-1.322 1.434h-7.093a2.3 2.3 0 0 0-2.273 2.245c0 1.519.776 2.537 2.273 2.537h2.756z"></svg:path><svg:path d="M10.914 13.406C10.357 13.39 9.88 12.58 9.88 12s.478-1.39 1.035-1.406h2.75c2.645.034 5.086 2.655 5.086 5.35c0 2.699-2.441 5.022-5.085 5.056H6.572c-.827-.023-1.3-.45-1.322-1.356a1.423 1.423 0 0 1 1.322-1.456h7.093c1.181 0 2.272-.9 2.272-2.245c0-1.519-.776-2.537-2.272-2.537z"></svg:path></svg:g>`,
})
export class TokenBrandedSnxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
