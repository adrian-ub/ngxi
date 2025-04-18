import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneRadioOneIcon],svg[icon-park-twotone-radio-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTRadioOne0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:rect width="38" height="28" x="5" y="14" stroke-linecap="round" stroke-linejoin="round" rx="2"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M32 22h4m-4 6h4m-4 6h4"></svg:path><svg:circle cx="18" cy="28" r="7" fill="#555"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10 14V6h28v8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTRadioOne0)"></svg:path>`,
})
export class IconParkTwotoneRadioOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
