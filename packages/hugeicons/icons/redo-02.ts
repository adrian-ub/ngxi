import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRedo02Icon],svg[hugeicons-redo-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.992 2.563c-.41 0-.75.34-.75.75v1.28c0 1.07 0 1.86-.08 2.43c-1.79-2.75-4.87-4.46-8.17-4.46c-5.38 0-9.75 4.37-9.75 9.75s4.37 9.75 9.75 9.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75c-4.55 0-8.25-3.7-8.25-8.25s3.7-8.25 8.25-8.25c2.9 0 5.61 1.55 7.1 4.05c-.59.02-1.46-.12-2.64-.32l-1.34-.22a.747.747 0 0 0-.86.62c-.07.41.21.79.62.86l1.34.22c1.16.19 2.05.34 2.78.34s1.29-.15 1.78-.56c.98-.82.98-2.12.98-4.46v-1.28c0-.41-.34-.75-.75-.75z" color="currentColor"></svg:path>`,
})
export class HugeiconsRedo02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
