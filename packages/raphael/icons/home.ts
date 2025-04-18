import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelHomeIcon],svg[raphael-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m27.812 16l-3.062-3.062V5.625h-2.625v4.688L16 4.188L4.188 16L7 15.933v11.942h17.875V16zM16 26.167h-5.833v-7H16zm5.667-3h-3.833v-4.042h3.833z"></svg:path>`,
})
export class RaphaelHomeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
