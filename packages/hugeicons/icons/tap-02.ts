import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTap02Icon],svg[hugeicons-tap-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M16.25 22.002c.03-1.865-.037-1.48.116-1.954c.152-.475.743-1.3 1.108-2.349c1.023-2.939.478-4.145-1.036-5.081c-1.595-.986-3.206-1.37-4.617-1.247V6.734c0-.962-.546-1.704-1.509-1.704s-1.45.837-1.45 1.8l.051 4.835m-.018 10.337v-.669c0-.785-.258-1.12-1.348-2.697c-1.201-1.738-1.196-1.82-1.471-2.577c-.05-.353-.348-1.178.756-2.328l2.081-2.066m0 3.526v-3.526"></svg:path><svg:path d="M6.498 6.024c-.066-.92.5-2.74 2.053-3.501c.64-.39 2.399-.993 4.08.082c1.657 1.059 1.769 2.62 1.873 3.408"></svg:path></svg:g>`,
})
export class HugeiconsTap02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
