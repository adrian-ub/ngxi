import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBridgeIcon],svg[tdesign-bridge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2v3.413q.172.086.406.192c.61.27 1.547.62 2.81.9C8.482 6.786 10.076 7 12 7s3.52-.214 4.783-.495c1.264-.28 2.2-.63 2.81-.9q.236-.106.407-.192V2h2v13h1v2h-1v5h-2v-5H4v5H2v-5H1v-2h1V2zm0 13h2V8.267a17 17 0 0 1-2-.662zm4-6.31V15h3V8.982a24 24 0 0 1-3-.291m5 .292V15h3V8.69c-.893.145-1.893.251-3 .292m5-.715V15h2V7.605c-.531.215-1.198.449-2 .662m2.446-3.1l.003-.002l-.002.002z"></svg:path>`,
})
export class TdesignBridgeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
