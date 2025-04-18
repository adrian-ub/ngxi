import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMouseRightClick01Icon],svg[hugeicons-mouse-right-click-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10.5 2v4m0 4v2m-7.26 5.089c.19 2.391 2.084 4.422 4.525 4.723c.898.11 1.81.188 2.735.188s1.837-.078 2.735-.188c2.44-.301 4.334-2.332 4.524-4.723c.132-1.657.241-3.357.241-5.089s-.11-3.432-.24-5.089c-.19-2.391-2.084-4.422-4.525-4.723C12.337 2.078 11.425 2 10.5 2s-1.837.078-2.735.188c-2.44.3-4.335 2.332-4.524 4.723C3.109 8.568 3 10.268 3 12s.109 3.432.24 5.089M19 2c1.055 1.132 1.765 2.501 2 4"></svg:path><svg:path d="M12 7.5c0-.466 0-.699-.076-.883a1 1 0 0 0-.541-.54C11.199 6 10.966 6 10.5 6s-.699 0-.883.076a1 1 0 0 0-.54.541C9 6.801 9 7.034 9 7.5v1c0 .466 0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077s.699 0 .883-.076a1 1 0 0 0 .54-.541C12 9.199 12 8.966 12 8.5z"></svg:path></svg:g>`,
})
export class HugeiconsMouseRightClick01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
