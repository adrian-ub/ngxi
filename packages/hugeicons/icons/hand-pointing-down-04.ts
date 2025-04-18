import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHandPointingDown04Icon],svg[hugeicons-hand-pointing-down-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.755 13.485v6.51c0 .831-.672 1.505-1.502 1.505a1.503 1.503 0 0 1-1.501-1.505V9.968m3.003 6.521l1.054-.027a2 2 0 0 0 1.95-2.003v-1.004m-.282 2.03l1.336-.055a2 2 0 0 0 1.95-2.003v-1.004m-.287 2.036l1.54-.189c1-.135 1.743-.994 1.734-2.004l-.049-5.2c0-2.184-2.113-4.566-4.379-4.566h-4.88c-1.193 0-2.61.78-3.835 2.848L4.992 7.786c-.58.756-1.406 2.118.166 3.985l2.594 2.76" color="currentColor"></svg:path>`,
})
export class HugeiconsHandPointingDown04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
