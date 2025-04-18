import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAddMaleIcon],svg[hugeicons-add-male-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.901 22.006h10.18c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H2.892c-.09 0-.16-.05-.16-.06a3.33 3.33 0 0 1 2.25-2.36l3.72-1.12c.31-.1.53-.39.53-.72v-1.94c0-.23-.11-.45-.29-.59c-1.67-1.31-2.71-2.78-2.71-6.05c0-3.01 1.5-4.67 4.24-4.67c1.742 0 2.464.723 2.49.75c.14.16.35.25.56.25c1.36 0 2.21.61 2.21 3.67c0 3.28-1.04 4.74-2.71 6.05c-.18.14-.29.36-.29.59v1.94c0 .41.34.75.75.75s.75-.34.75-.75v-1.58c1.59-1.31 3-3.13 3-7c0-1.37 0-4.96-3.41-5.16c-.46-.37-1.51-1.01-3.34-1.01c-3.59 0-5.74 2.3-5.74 6.17s1.41 5.69 3 7v1.02l-3.18.96c-1.6.49-2.86 1.8-3.27 3.43c-.11.46-.02.92.27 1.29c.31.4.81.64 1.34.64m14.849.25c0 .41.34.75.75.75s.75-.34.75-.75v-2.75H22c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-2.75v-2.75c0-.41-.34-.75-.75-.75s-.75.34-.75.75v2.75H15c-.41 0-.75.34-.75.75s.34.75.75.75h2.75z" color="currentColor"></svg:path>`,
})
export class HugeiconsAddMaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
