import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignShimenIcon],svg[tdesign-shimen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.999 1.996l11 1.1v4.81l-2.932.293L21.075 22h-7.162L15.01 8.713l-.621.06l-.121.011q-1.026.098-2.168.212l-.1.01l-2.914-.292l.991 13.287H2.923L3.931 8.199L.999 7.906v-4.81zM5.922 8.398L5.075 20h2.847L7.064 8.512zm11.11.113L16.085 20h2.838l-.846-11.6l-.435.046l-.014.001zM3 4.906v1.19l9 .9q1.095-.109 2.076-.203l.12-.011l1.81-.176c.492-.05.95-.098 1.415-.147l.012-.001c.469-.05.945-.1 1.468-.152L21 6.096v-1.19l-9-.9z"></svg:path>`,
})
export class TdesignShimenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
