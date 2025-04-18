import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKikIcon],svg[arcticons-kik-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.5 7.59h-35a2 2 0 0 0-2 2v22.5a2 2 0 0 0 2 2h3.16v6.32L16 34.09h25.5a2 2 0 0 0 2-2V9.59a2 2 0 0 0-2-2M8.56 12.4v17m.01-3.62l7.69-7.65m-5.25 5.22l6.05 6.02M27.54 12.4v17m0-3.62l7.69-7.65m-5.24 5.22l6.05 6.02M22.3 18.13V29.4"></svg:path><svg:circle cx="39.02" cy="23.97" r="1.98" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsKikIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
