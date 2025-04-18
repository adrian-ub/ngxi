import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDroidifyAlt2Icon],svg[arcticons-droidify-alt-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="16.427" cy="12.512" r="3.776" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="31.551" cy="12.512" r="3.776" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:rect width="33.785" height="15.085" x="7.107" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="6.135"></svg:rect><svg:rect width="33.785" height="18.673" x="7.107" y="23.827" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="6.638"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.709 16.92a2.996 2.996 0 0 0 4.726 0"></svg:path>`,
})
export class ArcticonsDroidifyAlt2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
