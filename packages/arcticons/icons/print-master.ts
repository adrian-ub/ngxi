import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPrintMasterIcon],svg[arcticons-print-master-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.102 40.985c-9.8-.034-8.106-11.343-8.106-11.343c-8.827-.154-11.496-2.77-11.496-2.77c0-17.378 12.556-19.87 19.52-19.87c6.955 0 19.48 3.099 19.48 19.869c0 0-2.669 2.617-11.496 2.771c0 0 2.087 11.288-7.957 11.355"></svg:path><svg:circle cx="35.206" cy="15.541" r="1.267" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="36.987" cy="21.581" r="2.497" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.097 29.657s7.728 2.589 15.769.019"></svg:path>`,
})
export class ArcticonsPrintMasterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
