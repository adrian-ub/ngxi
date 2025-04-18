import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsChair02Icon],svg[hugeicons-chair-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7 15v7m10-7v7m-5-11c-1.522 0-3.13.293-4.392.684c-.95.294-1.714 1.638-1.596 2.729c.044.404.357.587.686.587h10.604c.33 0 .642-.183.686-.587c.118-1.091-.646-2.435-1.596-2.73C15.131 11.294 13.522 11 12 11"></svg:path><svg:path d="m7.084 12l-.366-3.713c-.255-2.587-.382-3.88.169-4.808C7.924 1.734 10.24 2.017 12 2.017s4.076-.283 5.113 1.462c.551.928.424 2.221.169 4.808L16.916 12M7 18h10"></svg:path></svg:g>`,
})
export class HugeiconsChair02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
