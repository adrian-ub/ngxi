import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riH3Icon],svg[ri-h-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 8l-.002 2l-2.505 2.883a3.752 3.752 0 0 1-.993 7.367a3.75 3.75 0 0 1-3.682-3.033l1.964-.382a1.75 1.75 0 1 0 .924-1.895l-1.307-1.547L19.35 10H15V8zM4 4v7h7V4h2v16h-2v-7H4v7H2V4z"></svg:path>`,
})
export class RiH3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
