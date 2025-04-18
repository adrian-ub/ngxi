import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserStar02Icon],svg[hugeicons-user-star-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.18 15.296c-1.258.738-4.555 2.243-2.547 4.126c.982.92 2.074 1.578 3.448 1.578h7.838c1.374 0 2.467-.658 3.447-1.578c2.009-1.883-1.288-3.389-2.546-4.126a9.61 9.61 0 0 0-9.64 0M14 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0m5.518-3.567l.528 1.065c.072.148.264.29.426.317l.957.16c.612.104.756.551.315.993l-.744.75a.66.66 0 0 0-.156.547l.213.929c.168.735-.219 1.019-.864.635l-.897-.535a.64.64 0 0 0-.594 0l-.897.535c-.641.384-1.031.097-.863-.635l.213-.929a.66.66 0 0 0-.156-.547l-.744-.75c-.438-.442-.297-.89.315-.992l.956-.16a.65.65 0 0 0 .424-.318l.527-1.065c.288-.577.756-.577 1.041 0" color="currentColor"></svg:path>`,
})
export class HugeiconsUserStar02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
