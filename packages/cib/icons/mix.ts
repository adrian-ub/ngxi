import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibMixIcon],svg[cib-mix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.401 8.136v20.197c0 1.803-1.401 3.136-3.204 3.136C1.401 31.469 0 30.068 0 28.333V0h32v17.803c0 1.728-1.469 3.129-3.197 3.129c-1.803 0-3.272-1.401-3.272-3.129v-1.605c0-1.796-1.395-3.129-3.197-3.129c-1.516 0-2.828 1.068-3.136 2.5v5.099c0 1.803-1.463 3.136-3.197 3.136c-1.803 0-3.197-1.401-3.197-3.136V8.335c0-1.735-1.469-3.136-3.204-3.136a3.197 3.197 0 0 0-3.197 2.939z"></svg:path>`,
})
export class CibMixIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
