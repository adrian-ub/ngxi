import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAliIcon],svg[arcticons-ali-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="26.103" r="18.397" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="4.551" r="1.051" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 5.603V7.18"></svg:path><svg:ellipse cx="16.378" cy="32.936" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.84" ry="3.679"></svg:ellipse><svg:ellipse cx="31.622" cy="32.936" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.84" ry="3.679"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.91 22.949c3.648-3.036 8.617.592 12.09.525s8.499-3.138 12.09-.525s3.093 11.586 0 14.718s-21.278 2.95-24.18 0c-2.901-2.951-3.648-11.682 0-14.718"></svg:path>`,
})
export class ArcticonsAliIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
