import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsAlarmDuotoneIcon],svg[lets-icons-alarm-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-opacity=".25" stroke="currentColor" stroke-width="1.2"><svg:path d="M9.15 7.831a2.976 2.976 0 1 1 5.7 0l-1.563 5.211c-.07.234-.105.351-.159.447a1 1 0 0 1-.654.487C12.366 14 12.244 14 12 14s-.366 0-.474-.024a1 1 0 0 1-.654-.487c-.054-.096-.09-.213-.16-.447z"></svg:path><svg:circle cx="12" cy="19" r="2"></svg:circle></svg:g>`,
})
export class LetsIconsAlarmDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
