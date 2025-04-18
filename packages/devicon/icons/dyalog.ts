import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconDyalogIcon],svg[devicon-dyalog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f60" d="M6.026 0v34.883h19.682V19.4H56.7c25.359 0 45.78 19.613 45.78 43.976v1.25c0 24.363-20.421 43.987-45.78 43.987H6.026V128l48.327-.001c37.465-.001 67.62-26.65 67.62-59.765v-8.456C121.974 26.663 91.819 0 54.354 0z"></svg:path>`,
})
export class DeviconDyalogIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
