import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEarRings02Icon],svg[hugeicons-ear-rings-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M4 14.006c3.6 0 2.4 4 6 4m4-4c3.6 0 2.4 4 6 4"></svg:path><svg:path d="M7 21c1.657 0 3-2.461 3-5.498c0-3.036-1.343-5.498-3-5.498s-3 2.462-3 5.498S5.343 21 7 21m10 0c1.657 0 3-2.461 3-5.498c0-3.036-1.343-5.498-3-5.498s-3 2.462-3 5.498S15.343 21 17 21M9.955 7.235c-.35-.202-.894-.522-1.022-2.447C8.82 3.081 7.269 2.91 6.676 3.03c-.557.114-1.6.702-1.668 1.925c-.046.82.462 1.606 1.665 2.084c.202.08.345.271.345.49v2.233m12.919-2.527c-.35-.202-.895-.522-1.022-2.447c-.113-1.707-1.664-1.878-2.257-1.758c-.557.114-1.6.702-1.668 1.925c-.046.82.462 1.606 1.665 2.084c.202.08.345.271.345.49v2.233"></svg:path></svg:g>`,
})
export class HugeiconsEarRings02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
