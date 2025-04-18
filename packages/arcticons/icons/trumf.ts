import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTrumfIcon],svg[arcticons-trumf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.997 5.513c-10.218 0-18.5 8.282-18.5 18.5v18.5h18.5c10.217 0 18.5-8.283 18.5-18.5s-8.283-18.5-18.5-18.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.632 14.268v16.52a2.945 2.945 0 0 0 2.945 2.944h.883m-6.92-15.606h6.184"></svg:path>`,
})
export class ArcticonsTrumfIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
