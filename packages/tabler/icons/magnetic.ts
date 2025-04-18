import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMagneticIcon],svg[tabler-magnetic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 3v18m6-14c-.633-1.255-1.538-2-2.5-2c-1.933 0-3.5 3.134-3.5 7s1.567 7 3.5 7s3.5-3.134 3.5-7v-1M6 7c.633-1.255 1.538-2 2.5-2c1.933 0 3.5 3.134 3.5 7s-1.567 7-3.5 7S5 15.866 5 12v-1"></svg:path><svg:path d="m3 13l2-2l2 2m10 0l2-2l2 2"></svg:path></svg:g>`,
})
export class TablerMagneticIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
