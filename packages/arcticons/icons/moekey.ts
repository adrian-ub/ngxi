import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoekeyIcon],svg[arcticons-moekey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 5.5c-5.523 0-10 4.477-10 10v27h11v-26c0-.554.446-1 1-1s1 .446 1 1v26h11v-26c0-.554.446-1 1-1s1 .446 1 1v26h11v-27c0-5.523-4.477-10-10-10a10 10 0 0 0-8.494 4.744A10 10 0 0 0 15.5 5.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.5 23c0-.554.446-1 1-1s1 .446 1 1m11 0c0-.554.446-1 1-1s1 .446 1 1m-15 16h-11m24 0h-11m24 0h-11"></svg:path>`,
})
export class ArcticonsMoekeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
