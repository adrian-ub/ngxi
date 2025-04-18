import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAlien02Icon],svg[hugeicons-alien-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15.001 9.99a2.996 2.996 0 0 1-2.997 2.995A2.996 2.996 0 1 1 15 9.989m-3.006 6.989h.01m8.491-14.976c-.166.899-.999 2.756-2.997 2.995M3.512 2.002c.166.899.999 2.756 2.997 2.995"></svg:path><svg:path d="M8.84 3.694c-3.254 1.448-4.396 4.93-4.32 6.772c-1.122-.076-2.498.05-2.519 1.485s1.464 1.69 2.52 1.518v6.407c.017.53.065 1.225.614 1.468c1.276.566 2.351-1.151 3.52-1.072c.908.061 2.222 1.82 3.378 1.723c1.338-.111 2.369-1.718 3.393-1.718c1.213 0 1.426 1 2.888 1.16c1.09.12 1.2-.92 1.2-1.48v-6.476c1.89.234 2.639-.603 2.458-1.782c-.213-1.391-1.847-1.292-2.497-1.203c.101-1.034-.365-2.34-.566-2.852c-.297-.91-1.517-3.064-4.137-4.132s-5.059-.278-5.932.182"></svg:path></svg:g>`,
})
export class HugeiconsAlien02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
