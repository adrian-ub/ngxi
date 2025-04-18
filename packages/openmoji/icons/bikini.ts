import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiBikiniIcon],svg[openmoji-bikini-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#b399c8" d="M39.92 33.62c-.827-.405 6.733 2.881 14.27.5c-.046-8.429-6.999-12.9-6.999-12.9s-7.227 3.975-7.273 12.4zm-22.38.2s6.758 3.627 14.55 0c-.047-8.591-7.133-13.15-7.133-13.15s-7.366 4.561-7.413 13.15zm1.818 9.743l-.07 1.05s4.774 2.18 8.301 4.941c2.526 1.655 6.505 7.76 7.97 9.313c0 0 3.715-6.867 9.083-10.04c1.945-2.4 8.113-4.009 8.113-4.009l-.035-1.185"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M39.66 33.44s6.605 3.51 14.22 0c-.046-8.313-6.972-12.73-6.972-12.73s-7.2 4.414-7.245 12.73zm-21.54 0s6.605 3.51 14.22 0c-.045-8.313-6.972-12.73-6.972-12.73s-7.2 4.414-7.245 12.73zm16.51-.35l2.74.01M25.23 11.77v8.4m21.54-8.16v8.7M35.76 42.86H18.6v2.445s7.12 2.194 11.2 6.873c4.082 4.68 5.957 8.172 5.957 8.172h.064s1.332-3.312 5.414-7.99s12.17-7.055 12.17-7.055V42.86h-17.59"></svg:path>`,
})
export class OpenmojiBikiniIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
