import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAlphaCircleIcon],svg[hugeicons-alpha-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15.001 8c.107.864 0 2.232-.4 3.828c-.346 1.14-1.439 4.429-4.277 4.153c-2.452-.324-3.479-2.724-3.305-4.297c.066-1.32 1.052-3.648 3.678-3.684c2.358.204 2.958 2.208 3.291 3.9c.36 1.56.32 2.329.92 3.397c.36.588 1.04.804 1.586.66c.44-.18.506-.564.506-.852"></svg:path><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path></svg:g>`,
})
export class HugeiconsAlphaCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
