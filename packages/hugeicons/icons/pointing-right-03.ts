import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPointingRight03Icon],svg[hugeicons-pointing-right-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.329 7.871L9.5 10.005h9.75a1.75 1.75 0 1 1 0 3.5H14l-.478 2.988c-.289 1.929-.434 2.893-.84 3.572C12.009 21.187 11 22 9.526 22c-1.026 0-1.715-.254-3.565-.87c-1.174-.392-1.76-.587-2.225-.906a4 4 0 0 1-1.58-2.192C2 17.49 2 16.872 2 15.634v-1.05c0-1.644 0-2.467.302-3.2q.081-.196.183-.384c.378-.696 1.016-1.215 2.293-2.252l4.134-3.359a1.74 1.74 0 0 1 2.417 2.482M22 4.5h-6m6 0c0-.7-1.994-2.008-2.5-2.5M22 4.5c0 .7-1.994 2.008-2.5 2.5" color="currentColor"></svg:path>`,
})
export class HugeiconsPointingRight03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
