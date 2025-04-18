import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAlphaSquareIcon],svg[hugeicons-alpha-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15.001 8c.107.864 0 2.232-.4 3.828c-.346 1.14-1.439 4.429-4.277 4.153c-2.452-.324-3.479-2.724-3.305-4.297c.066-1.32 1.052-3.648 3.678-3.684c2.358.204 2.958 2.208 3.291 3.9c.36 1.56.32 2.329.92 3.397c.36.588 1.04.804 1.586.66c.44-.18.506-.564.506-.852"></svg:path><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path></svg:g>`,
})
export class HugeiconsAlphaSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
