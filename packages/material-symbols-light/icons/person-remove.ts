import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPersonRemoveIcon],svg[material-symbols-light-person-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.116 10.5v-1h5v1zM9 11.385q-1.237 0-2.119-.882T6 8.385t.881-2.12T9 5.386t2.119.88t.881 2.12t-.881 2.118T9 11.385m-7 7.23V16.97q0-.619.36-1.158q.361-.54.97-.838q1.416-.679 2.834-1.018q1.417-.34 2.836-.34t2.837.34t2.832 1.018q.61.298.97.838q.361.539.361 1.158v1.646z"></svg:path>`,
})
export class MaterialSymbolsLightPersonRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
