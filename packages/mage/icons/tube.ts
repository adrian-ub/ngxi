import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageTubeIcon],svg[mage-tube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.713 5.278A9.5 9.5 0 1 0 5.287 18.722A9.5 9.5 0 0 0 18.713 5.278M12 16.214a4.222 4.222 0 1 1 .007-8.445A4.222 4.222 0 0 1 12 16.214m6.713-10.936l-3.736 3.737m3.736 9.69l-3.736-3.737m-5.954 0l-3.736 3.737m3.736-9.69L5.287 5.278"></svg:path>`,
})
export class MageTubeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
