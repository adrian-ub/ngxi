import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMapPinpoint02Icon],svg[hugeicons-map-pinpoint-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20 9c-.857-4.019-5.009-7-8.999-7C7.458 2 4.09 4.1 2.686 7.38C.091 13.447 5.413 17.626 9.384 21.367a2.37 2.37 0 0 0 1.617.633c.55 0 1.08-.189 1.499-.53"></svg:path><svg:path d="M14 9.196a3.5 3.5 0 1 0-4.5 4.967M17 16h.009m.889 5.652c-.24.223-.563.348-.898.348s-.657-.125-.898-.348c-2.206-2.058-5.163-4.356-3.72-7.693C13.16 12.155 15.031 11 17 11s3.84 1.155 4.619 2.959c1.44 3.333-1.51 5.642-3.72 7.693"></svg:path></svg:g>`,
})
export class HugeiconsMapPinpoint02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
