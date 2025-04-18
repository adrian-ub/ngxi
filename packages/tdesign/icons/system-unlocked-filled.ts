import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemUnlockedFilledIcon],svg[tdesign-system-unlocked-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 2H1v16h12v-2c0-.698.11-1.371.314-2.002H3v-10h18v5.676c.72.17 1.395.46 2 .848zM3 20h10v2H3z"></svg:path><svg:path fill="currentColor" d="M18.252 14.75a1.25 1.25 0 0 1 2.13-.887l.71.705l1.41-1.418l-.71-.705a3.25 3.25 0 0 0-5.541 2.305v.75H15V22h9v-6.5h-5.748z"></svg:path>`,
})
export class TdesignSystemUnlockedFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
