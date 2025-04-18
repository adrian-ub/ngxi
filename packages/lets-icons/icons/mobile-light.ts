import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsMobileLightIcon],svg[lets-icons-mobile-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M7.232 3.232c-.401.402-.574.907-.654 1.507C6.5 5.317 6.5 6.052 6.5 6.963v10.074c0 .911 0 1.646.078 2.224c.08.6.253 1.105.654 1.507c.402.401.907.574 1.507.654c.578.078 1.313.078 2.224.078h2.074c.911 0 1.646 0 2.224-.078c.6-.08 1.105-.253 1.507-.654c.401-.402.574-.907.654-1.507c.078-.578.078-1.313.078-2.224V6.963c0-.911 0-1.646-.078-2.224c-.08-.6-.253-1.105-.654-1.507c-.402-.401-.907-.574-1.507-.654c-.578-.078-1.313-.078-2.224-.078h-2.074c-.911 0-1.646 0-2.224.078c-.6.08-1.105.253-1.507.654ZM7 16h10"></svg:path>`,
})
export class LetsIconsMobileLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
