import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibTensorflowIcon],svg[cib-tensorflow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m26.135 16l.13 6.266l-4.13-2.401v8.938l-5.469 3.198v-32l13.599 7.865v7.068l-8.13-4.797v3.599zM1.734 7.865L15.333 0v32l-5.469-3.198V10.135l-8.13 4.797z"></svg:path>`,
})
export class CibTensorflowIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
