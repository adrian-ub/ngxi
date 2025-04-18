import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAlanWattsIcon],svg[arcticons-alan-watts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.546 33.03c3.423-2.089 6.846-4.178 9.941-7.543s5.862-8.006 8.629-12.647"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.558 32.246c.783-.61 1.566-1.218 2.314-4.44c.748-3.22 1.46-9.053 1.112-11.447c-.349-2.393-1.757-1.347-3.165-.3"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.206 22.325c3.626-.175 7.253-.349 9.327-.48c2.074-.13 2.596-.217 2.175 1.364c-.42 1.581-1.784 4.83-2.422 8.108s-.551 6.585.116 7.934s1.915.74 3.916-2.582s4.758-9.355 5.657-8.252c.9 1.102-.058 9.34.798 10.138s3.524-5.845 5.73-8.906s3.944-2.538 5.685-2.016"></svg:path>`,
})
export class ArcticonsAlanWattsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
