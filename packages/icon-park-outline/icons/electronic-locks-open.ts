import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineElectronicLocksOpenIcon],svg[icon-park-outline-electronic-locks-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:rect width="24" height="18" x="12" y="20" rx="2"></svg:rect><svg:path stroke-linecap="round" d="M18 20v-6c0-3.682 2.686-6 6-6c1.85 0 3.503.722 4.604 2a5.6 5.6 0 0 1 1.102 2M24 28v2M6 18v12m36-12v12"></svg:path></svg:g>`,
})
export class IconParkOutlineElectronicLocksOpenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
