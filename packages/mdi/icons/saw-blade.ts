import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSawBladeIcon],svg[mdi-saw-blade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 15s-1.4 1.3 1.1 2l-2.8 2.8h-2.8s-1.9-.1-.5 2.2h-4l-2-2s-1.3-1.4-2 1.1l-2.8-2.8v-2.8s.1-1.9-2.2-.5v-4l2-2s1.4-1.3-1.2-1.9l2.8-2.9h2.9s1.9.1.5-2.2h4l2 2s1.3 1.4 2-1.2l2.8 2.8v2.9s-.1 1.9 2.2.5v4zm-6-3a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2"></svg:path>`,
})
export class MdiSawBladeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
