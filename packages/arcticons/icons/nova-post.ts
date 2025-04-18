import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNovaPostIcon],svg[arcticons-nova-post-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.5 24l7.488-7.488v14.976zm37 0l-7.488-7.488v14.976zm-22.024 3.524h7.048v7.488h3.964L24 42.5l-7.488-7.488h3.964zm0-7.048h7.048v-7.488h3.964L24 5.5l-7.488 7.488h3.964z"></svg:path>`,
})
export class ArcticonsNovaPostIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
