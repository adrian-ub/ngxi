import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoCodepenIcon],svg[tdesign-logo-codepen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 .807l11 7.15v8.086l-11 7.15l-11-7.15V7.957zm-9 9.614v3.158L5.256 12zm.788 5.048L11 20.157V16.02l-4-2.8zM8.744 12L12 14.28L15.256 12L12 9.72zM13 7.98l4 2.8l3.212-2.248L13 3.842zm-2-4.137L3.788 8.532L7 10.779l4-2.8zm10 6.579L18.744 12L21 13.58zm-.788 5.048L17 13.221l-4 2.8v4.136z"></svg:path>`,
})
export class TdesignLogoCodepenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
