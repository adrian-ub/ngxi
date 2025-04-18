import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRoot02Icon],svg[hugeicons-root-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17.725 2.5c1.39.154 2.325.501 3.023 1.287C22 5.197 22 7.464 22 12s0 6.804-1.252 8.213c-.698.786-1.634 1.133-3.023 1.287m-11.45 0c-1.39-.154-2.325-.501-3.023-1.287C2 18.803 2 16.536 2 12s0-6.804 1.252-8.213C3.95 3.001 4.886 2.654 6.275 2.5"></svg:path><svg:path d="M18 8h-5.483c-.817 0-1.057.04-1.218.864L9.954 14.47c-.332 1.328-.503 1.524-.834 1.551c-.36-.12-.53-.428-1.14-1.68l-.345-.76c-.263-.54-.35-.767-.615-.84c-.4-.11-.713.2-1.02.4"></svg:path><svg:path d="M13.104 11.432c.42-.014.876-.032 1.125.384c.343.692.887 2.111 1.089 2.561c.1.173.162.323.521.443c.27.035.66.044.66.044"></svg:path><svg:path d="M16.74 11.42c-.845 0-1.35.946-1.823 1.539c-.61.906-1.236 1.92-2.028 1.893"></svg:path></svg:g>`,
})
export class HugeiconsRoot02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
