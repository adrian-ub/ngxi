import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhInkpenIcon],svg[whh-inkpen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832.757 384h85l107 576l-256-256v-64q0-53-37.5-90.5t-90.5-37.5t-90.5 37.5t-37.5 90.5t37.5 90.5t90.5 37.5h64l256 256l-576-107v-85q0-176-79-324q-55 8-108-9t-93-58l-34-33q-70-70-70-169t70-169t169.5-70t169.5 70l33 33q41 41 58 94.5t9 108.5q148 78 323 78"></svg:path>`,
})
export class WhhInkpenIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
