import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteVueSolidIcon],svg[flowbite-vue-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 3L12 7.156L9.857 3H2l10 18L22 3zM4.486 4.5h2.4L12 13.8l5.107-9.3h2.4L12 18.021z"></svg:path>`,
})
export class FlowbiteVueSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
