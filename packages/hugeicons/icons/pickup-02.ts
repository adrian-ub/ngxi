import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPickup02Icon],svg[hugeicons-pickup-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19 17.5c1.424 0 2.063 0 2.515-.487q.03-.032.057-.065c.43-.513.43-1.32.43-2.936c0-1.225 0-1.837-.24-2.354c-.251-.54-.703-.877-1.654-1.565c-.945-.684-1.616-1.452-2.256-2.51c-.912-1.51-1.369-2.265-2.053-2.674S14.308 4.5 12.694 4.5h-.7m-3.002 13h6.005"></svg:path><svg:path d="m13.996 4.5l.746 3.48c.43 2.003.5 3.52 2.788 3.52h3.972m.5 3h-1m-9.007-10v13m5.004 2A2 2 0 1 0 17 15.499a2 2 0 0 0 0 4.001m-10.008 0a2 2 0 1 0 .001-4.001a2 2 0 0 0-.001 4.001"></svg:path><svg:path d="M11.99 11.503H1.998v4.71c0 .375.693.816 1.315 1.11c.217.103.455.15.695.156l.981.028"></svg:path></svg:g>`,
})
export class HugeiconsPickup02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
