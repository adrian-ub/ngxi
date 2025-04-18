import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDasherIcon],svg[arcticons-dasher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.224 31.315h5.278a4.113 4.113 0 0 0 4.113-4.113h0a4.113 4.113 0 0 0-4.114-4.114H15.386"></svg:path><svg:rect width="29.99" height="32.597" x="9.005" y="10.903" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.384"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.542 10.903V7.268A2.77 2.77 0 0 0 27.774 4.5h-7.548a2.77 2.77 0 0 0-2.768 2.768v3.635"></svg:path>`,
})
export class ArcticonsDasherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
