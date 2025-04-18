import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRoad01Icon],svg[hugeicons-road-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.172 3.172C4 4.343 4 6.229 4 10v4c0 3.771 0 5.657 1.172 6.828m0-17.656C6.343 2 8.229 2 12 2s5.657 0 6.828 1.172m-13.656 0q0 0 0 0m0 17.656C6.343 22 8.229 22 12 22s5.657 0 6.828-1.172m-13.656 0q0 0 0 0m13.656 0C20 19.657 20 17.771 20 14v-4c0-3.771 0-5.657-1.172-6.828m0 17.656q0 0 0 0m0-17.656q0 0 0 0M12 11v2m0-7.5v2m0 9v2" color="currentColor"></svg:path>`,
})
export class HugeiconsRoad01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
