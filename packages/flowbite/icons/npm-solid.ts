import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteNpmSolidIcon],svg[flowbite-npm-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3.87H4v16h8v-13h5v13h3v-16z"></svg:path>`,
})
export class FlowbiteNpmSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
