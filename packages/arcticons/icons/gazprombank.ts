import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGazprombankIcon],svg[arcticons-gazprombank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.5 36.5l5.691-12.874c3.7-6.408 4.246-12.126 18.675-12.126H43.5m0 0l-5.691 12.874c-3.7 6.408-4.246 12.126-18.675 12.126H4.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.5 36.5l3.867-8.689c2.513-4.324 5.388-8.183 15.19-8.183h7.438m0 0l-3.866 8.688c-2.514 4.325-6.494 8.184-16.296 8.184H4.5"></svg:path>`,
})
export class ArcticonsGazprombankIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
