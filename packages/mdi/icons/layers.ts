import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLayersIcon],svg[mdi-layers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 16l7.36-5.73L21 9l-9-7l-9 7l1.63 1.27M12 18.54l-7.38-5.73L3 14.07l9 7l9-7l-1.63-1.27z"></svg:path>`,
})
export class MdiLayersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
