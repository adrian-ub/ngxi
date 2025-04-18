import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPcstartshutdownIcon],svg[arcticons-pcstartshutdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="14" cy="14" r="8.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="34" cy="14" r="8.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="14" cy="34" r="8.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="34" cy="34" r="8.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m30.5 17.5l7-7m-7 0l7 7M12 9.968a4.5 4.5 0 1 0 4 0M14 8.5V13M9.5 34a4.5 4.5 0 1 0 1.318-3.182"></svg:path><svg:circle cx="34" cy="38.557" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.234 31.266a2.766 2.766 0 0 1 5.532 0a2.48 2.48 0 0 1-.81 1.955c-.573.46-1.966 1.212-1.966 2.382v.377m-22.466-7.788l-.706 2.626l2.626.706"></svg:path>`,
})
export class ArcticonsPcstartshutdownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
