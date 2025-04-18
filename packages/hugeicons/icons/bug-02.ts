import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBug02Icon],svg[hugeicons-bug-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3.012 6.598c-.12 1.059.646 3.597 2.865 3.657m12.413-.06c1.078.06 2.697-1.199 2.697-3.597m-.899 14.39c.06-1.379-.84-3.514-2.579-3.573M3.901 20.988c-.061-1.388.858-3.537 2.636-3.597m-3.525-3.598h2.206m15.782 0h-2.172m-6.835 0v-2.938M16.49 3l-1.799 1.799M7.496 3l1.799 1.799M6.956 8.612c1.619 1.164 5.636 2.842 10.013.072"></svg:path><svg:path d="M16.826 7.677c-3.574-4.977-8.13-2.578-9.75.144c-1.055 1.775-2.698 6.068.42 10.745c3.358 4.1 7.315 2.242 8.934.084c1.56-1.86 3.094-6.656.396-10.973"></svg:path></svg:g>`,
})
export class HugeiconsBug02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
