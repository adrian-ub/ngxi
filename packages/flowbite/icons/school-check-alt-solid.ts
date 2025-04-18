import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteSchoolCheckAltSolidIcon],svg[flowbite-school-check-alt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M21.707 14.293a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L17 17.586l3.293-3.293a1 1 0 0 1 1.414 0" clip-rule="evenodd"></svg:path><svg:path d="M6.651 11.63L12 5.048l5.349 6.584a1 1 0 0 0 .776.369h2.866a3 3 0 0 0-2.112.879l-1.882 1.882a3 3 0 0 0-2.17-.756a3 3 0 1 0-2.655 1.99a3 3 0 0 0 .707 3.126l.878.879H4a1 1 0 0 1-1-1v-7h2.875a1 1 0 0 0 .776-.37"></svg:path><svg:path d="M12 12a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-9.5-2l2.7-3.6A1 1 0 0 1 6 6h2.649l-3.25 4zm12.851-4l3.25 4H21.5l-2.7-3.6A1 1 0 0 0 18 6z"></svg:path></svg:g>`,
})
export class FlowbiteSchoolCheckAltSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
