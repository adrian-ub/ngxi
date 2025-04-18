import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumShirtIcon],svg[circum-shirt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.657 21.949H7.343a2.5 2.5 0 0 1-2.5-2.5v-8.227a6.5 6.5 0 0 1 .112-1.2l.269-1.432a5.6 5.6 0 0 0 .094-1.015V3.3a1.25 1.25 0 0 1 1.25-1.25h2.247a1.25 1.25 0 0 1 1.25 1.25v3.113a1.935 1.935 0 0 0 3.87 0V3.3a1.25 1.25 0 0 1 1.25-1.25h2.247a1.25 1.25 0 0 1 1.25 1.25v4.275a5.5 5.5 0 0 0 .1 1.015l.269 1.431a6.6 6.6 0 0 1 .111 1.2v8.227a2.5 2.5 0 0 1-2.505 2.501M6.568 3.051a.25.25 0 0 0-.25.25v4.274a6.5 6.5 0 0 1-.111 1.2l-.27 1.432a5.5 5.5 0 0 0-.094 1.015v8.227a1.5 1.5 0 0 0 1.5 1.5h9.314a1.5 1.5 0 0 0 1.5-1.5v-8.227a5.5 5.5 0 0 0-.094-1.016l-.269-1.43a6.5 6.5 0 0 1-.112-1.2V3.3a.25.25 0 0 0-.25-.25h-2.247a.25.25 0 0 0-.25.25v3.113a2.935 2.935 0 0 1-5.87 0V3.3a.25.25 0 0 0-.25-.25Z"></svg:path><svg:path fill="currentColor" d="M11.986 17.333v-3.459a.075.075 0 0 0-.114-.064l-.638.392a.149.149 0 0 1-.228-.128v-.65a.3.3 0 0 1 .145-.258l.764-.457a.3.3 0 0 1 .154-.043h.631a.3.3 0 0 1 .3.3v4.367a.3.3 0 0 1-.3.3h-.409a.3.3 0 0 1-.305-.3"></svg:path>`,
})
export class CircumShirtIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
