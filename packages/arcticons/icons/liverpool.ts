import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLiverpoolIcon],svg[arcticons-liverpool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.39 40.818V24c0-1.346-1.345-2.69-2.69-2.69h-6.054"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.427 40.818V19.291c0-1.346-1.345-2.691-2.69-2.691H21.645"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.464 40.818V14.582c0-1.346-1.346-2.691-2.691-2.691H21.645"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 40.818V9.873c0-1.346-1.345-2.691-2.69-2.691H21.645m-4.035 0V24c0 1.346 1.345 2.69 2.69 2.69h6.055"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.573 7.182v21.527c0 1.346 1.345 2.691 2.69 2.691h10.091"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.536 7.182v26.236c0 1.346 1.346 2.691 2.691 2.691h14.128"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 7.182v30.945c0 1.346 1.346 2.691 2.69 2.691h18.164"></svg:path>`,
})
export class ArcticonsLiverpoolIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
