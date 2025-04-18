import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibKloutIcon],svg[cib-klout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3.563v19.631h21.563L32 28.438V3.563zm13.104 11.229h-1.563l-3.839 5.405H3.135l5.249-7.02l-4.849-6.761h4.448l3.547 5.177h1.573zm11.208 5.401l-3.839-5.401h-2.624v5.401h-3.641V6.416h3.647v5.177h2.619l3.548-5.177h4.437l-4.844 6.761l5.249 7.02h-4.552z"></svg:path>`,
})
export class CibKloutIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
