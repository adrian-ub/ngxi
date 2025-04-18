import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRoad02Icon],svg[hugeicons-road-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.828 5.172C19.657 4 17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172m17.656 0C22 6.343 22 8.229 22 12s0 5.657-1.172 6.828m0-13.656q0 0 0 0m-17.656 0C2 6.343 2 8.229 2 12s0 5.657 1.172 6.828m0-13.656q0 0 0 0m0 13.656C4.343 20 6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172m-17.656 0q0 0 0 0m17.656 0q0 0 0 0M13 12h-2m7.5 0h-2m-9 0h-2" color="currentColor"></svg:path>`,
})
export class HugeiconsRoad02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
