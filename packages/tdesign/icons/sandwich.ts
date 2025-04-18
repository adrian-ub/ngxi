import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSandwichIcon],svg[tdesign-sandwich-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.8 2.515a2 2 0 0 1 2.494.476L21 8.638V22H3V8.406zM5 10v4h14v-4zm12.865-2l-3.107-3.73L7.922 8zM19 16H5v4h14z"></svg:path>`,
})
export class TdesignSandwichIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
