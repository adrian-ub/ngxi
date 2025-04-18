import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsCoughingAlt24pxIcon],svg[healthicons-coughing-alt-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M10 4c-4.088 0-8 2.762-8 7.177c0 2.278 1.282 3.777 2.459 4.66a8.6 8.6 0 0 0 1.605.942l.054.024V19a1 1 0 0 0 1 1h4.117a1 1 0 0 0 1-1v-.235h2.294a1 1 0 0 0 1-1v-2.706H17a1 1 0 0 0 .956-1.294l-1.647-5.353a1 1 0 0 0-.042-.112l-.001-.002v-.002l-.003-.005l-.007-.014l-.007-.015l-.013-.029l-.072-.145a8.8 8.8 0 0 0-1.37-1.922C13.801 5.117 12.218 4 10 4m1.5 12a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-2-2a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path><svg:path d="M20 16a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m1 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2m1-10a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-4.5 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path></svg:g>`,
})
export class HealthiconsCoughingAlt24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
