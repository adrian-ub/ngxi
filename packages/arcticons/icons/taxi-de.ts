import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTaxiDeIcon],svg[arcticons-taxi-de-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.253 24.16c0-7.924-6.424-14.349-14.35-14.349s-14.35 6.425-14.35 14.35c0 9.78 14.35 17.631 14.35 17.631s14.35-7.85 14.35-17.631"></svg:path><svg:circle cx="30.017" cy="24.161" r="3.732" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.037 37.964L5.5 42.5m37-37l-4.311 4.311"></svg:path>`,
})
export class ArcticonsTaxiDeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
