import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenOrganization26Icon],svg[garden-organization-26-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 23v-8h-4v8H6.9c-.5 0-.9-.4-.9-.9V3.9c0-.5.4-.9.9-.9h12.2c.5 0 .9.4.9.9v18.2c0 .5-.4.9-.9.9zM10 7h6m-6 3h6"></svg:path>`,
})
export class GardenOrganization26Icon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
