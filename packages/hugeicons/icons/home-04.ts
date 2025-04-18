import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHome04Icon],svg[hugeicons-home-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 18h4M2.351 13.214c-.353-2.298-.53-3.446-.095-4.465c.434-1.018 1.398-1.715 3.325-3.108L7.021 4.6C9.418 2.867 10.617 2 12 2s2.582.867 4.979 2.6l1.44 1.041c1.927 1.393 2.89 2.09 3.325 3.108c.434 1.019.258 2.167-.095 4.464l-.301 1.96c-.5 3.256-.751 4.884-1.919 5.856s-2.875.971-6.29.971H10.86c-3.415 0-5.122 0-6.29-.971c-1.168-.972-1.418-2.6-1.919-5.857z" color="currentColor"></svg:path>`,
})
export class HugeiconsHome04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
