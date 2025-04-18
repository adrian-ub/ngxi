import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageLockSquareIcon],svg[mage-lock-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15.13 10.552H8.87c-.865 0-1.565.648-1.565 1.448v4.343c0 .8.7 1.448 1.565 1.448h6.26c.865 0 1.566-.648 1.566-1.448V12c0-.8-.7-1.448-1.565-1.448m-6.027 0V9.104a2.896 2.896 0 1 1 5.792 0v1.448"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MageLockSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
