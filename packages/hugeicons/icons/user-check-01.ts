import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserCheck01Icon],svg[hugeicons-user-check-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14 18s1 0 2 2c0 0 3.177-5 6-6"></svg:path><svg:path d="M13 22H6.59c-1.545 0-2.774-.752-3.877-1.803c-2.26-2.153 1.45-3.873 2.865-4.715c3.178-1.893 7.175-1.972 10.422-.239m.5-8.743a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0"></svg:path></svg:g>`,
})
export class HugeiconsUserCheck01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
