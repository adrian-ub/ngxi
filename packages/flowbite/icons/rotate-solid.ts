import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteRotateSolidIcon],svg[flowbite-rotate-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M17.7 7.7A7.1 7.1 0 0 0 5 10.8"></svg:path><svg:path d="M18 4v4h-4m-7.7 8.3A7.1 7.1 0 0 0 19 13.2"></svg:path><svg:path d="M6 20v-4h4"></svg:path></svg:g>`,
})
export class FlowbiteRotateSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
