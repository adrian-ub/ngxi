import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBlackHoleIcon],svg[hugeicons-black-hole-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20.5 5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-17 17a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m17.539-8.938c.569-.135.961-.569.961-1.062s-.392-.927-.962-1.062l-4.517-1.076a5 5 0 0 0-9.042 0l-4.517 1.076C2.392 11.073 2 11.507 2 12s.392.927.962 1.062l4.517 1.076a5 5 0 0 0 9.042 0z"></svg:path><svg:path d="M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4m3-11.542A10 10 0 0 0 12 2a9.99 9.99 0 0 0-8 4m5 15.542A10 10 0 0 0 12 22a9.99 9.99 0 0 0 8-3.999"></svg:path></svg:g>`,
})
export class HugeiconsBlackHoleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
