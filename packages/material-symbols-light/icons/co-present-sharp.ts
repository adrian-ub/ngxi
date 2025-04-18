import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCoPresentSharpIcon],svg[material-symbols-light-co-present-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 19.577V4.5H3v8H2v-9h20v16.077zM9 13.385q-1.237 0-2.119-.882T6 10.385t.881-2.12T9 7.386t2.119.88t.881 2.12t-.881 2.118T9 13.385m-7 7.23V18.97q0-.619.36-1.158q.361-.54.97-.838q1.416-.679 2.834-1.018q1.417-.34 2.836-.34t2.837.34t2.832 1.018q.61.298.97.838q.361.539.361 1.158v1.646z"></svg:path>`,
})
export class MaterialSymbolsLightCoPresentSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
