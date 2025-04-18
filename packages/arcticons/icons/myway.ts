import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMywayIcon],svg[arcticons-myway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m31.637 19.561l-2.219 8.878l-2.22-8.878l-2.219 8.878l-2.22-8.878m-5.881 8.878l-2.22-8.878l-2.219 8.878l-2.22-8.878L8 28.439m14.759-8.878L19.819 24l-2.941-4.439m2.941 8.878V24M40 19.561L37.059 24l-2.941-4.439m2.941 8.878V24m-3.502 1.469H30.16m1.477-5.908l2.885 8.878"></svg:path>`,
})
export class ArcticonsMywayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
