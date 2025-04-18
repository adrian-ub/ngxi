import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackGfIcon],svg[flagpack-gf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="32" height="24" fill="#5EAA22" rx="2"></svg:rect><svg:path fill="#FECA00" fill-rule="evenodd" d="m0 0l32 24H0z" clip-rule="evenodd"></svg:path><svg:path fill="#E21835" fill-rule="evenodd" d="m15.93 14.406l-3.485 2.418l1.114-4.141L11 10.038l3.465-.143L15.93 5.8l1.466 4.095h3.458l-2.553 2.788l1.279 3.897z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class FlagpackGfIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
