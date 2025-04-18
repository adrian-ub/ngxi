import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsUblDigitalIcon],svg[arcticons-ubl-digital-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.533 18.277v11.446h5.723M13.198 18.277v7.654a3.791 3.791 0 0 0 7.583 0v-7.654M28.719 24a2.861 2.861 0 0 1 0 5.723h-4.722V18.278h4.722a2.861 2.861 0 0 1 0 5.722m0 0h-4.722"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.225 13.498c-3.355-1.121-7.29-1.767-11.498-1.767C14.451 11.731 4.5 17.224 4.5 24s9.951 12.269 22.227 12.269c6.695 0 12.698-1.634 16.773-4.218"></svg:path><svg:circle cx="40.162" cy="14.234" r="1.797" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsUblDigitalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
