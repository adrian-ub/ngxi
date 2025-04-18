import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageDirectionUp2Icon],svg[mage-direction-up-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.884 17.608L6.28 20.81a2.166 2.166 0 0 1-3.03-2.785L9.946 4.001a2.164 2.164 0 0 1 3.924 0l6.897 14.227a2.164 2.164 0 0 1-2.943 2.8l-4.762-3.42a2.09 2.09 0 0 0-2.178 0m1.168-7.013v6.724"></svg:path>`,
})
export class MageDirectionUp2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
