import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagMu4x3Icon],svg[flag-mu-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd"><svg:path fill="#00a04d" d="M0 360h640v120H0z"></svg:path><svg:path fill="#151f6d" d="M0 120h640v120H0z"></svg:path><svg:path fill="#ee2737" d="M0 0h640v120H0z"></svg:path><svg:path fill="#ffcd00" d="M0 240h640v120H0z"></svg:path></svg:g>`,
})
export class FlagMu4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
