import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uiwDArrowRightIcon],svg[uiw-d-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m2.542 2.154l7.254 7.26q.204.21.204.483a.73.73 0 0 1-.204.5l-7.575 7.398q-.575.476-1.022 0q-.448-.475 0-.98l7.08-6.918l-6.754-6.763q-.356-.514.066-.935q.422-.42.951-.045m9 0l7.254 7.26q.204.21.204.483a.73.73 0 0 1-.204.5l-7.575 7.398q-.575.476-1.022 0q-.449-.475 0-.98l7.08-6.918l-6.754-6.763q-.355-.514.066-.935q.422-.42.951-.045"></svg:path>`,
})
export class UiwDArrowRightIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
