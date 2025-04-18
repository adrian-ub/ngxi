import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPeggleclassicIcon],svg[arcticons-peggleclassic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.664 24.705s-3.596-6.115-4.45-8.715c0 0 4.206-4.388 7.03 1.32c2.824 5.71-2.58 7.395-2.58 7.395"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.669 29.309s2.122 3.646 6.144 7.122c0 0 1.236 2.96-3.993 5.574s-6.378-.604-6.378-.604s-7.356-22.094-11.55-27.208c0 0-1.925-1.034 5.344-5.774s14.02-1.925 14.02-1.925s7.786 3.131 7.729 12.095c-.058 8.964-8.702 10.116-11.316 10.72"></svg:path>`,
})
export class ArcticonsPeggleclassicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
