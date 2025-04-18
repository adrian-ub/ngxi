import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonButtonCenteredIcon],svg[carbon-button-centered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 15h14v2H9z"></svg:path><svg:path fill="currentColor" d="M28 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2M4 12v8h24v-8Z"></svg:path>`,
})
export class CarbonButtonCenteredIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
