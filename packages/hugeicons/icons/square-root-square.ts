import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSquareRootSquareIcon],svg[hugeicons-square-root-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path><svg:path d="M18 7.99h-5.483c-.817 0-1.057.04-1.218.864L9.954 14.46c-.332 1.328-.503 1.524-.834 1.55c-.36-.12-.53-.428-1.14-1.68l-.345-.76c-.263-.54-.35-.767-.615-.84c-.4-.11-.713.201-1.02.4m7.104-1.708c.42-.014.876-.032 1.125.384c.343.693.887 2.112 1.089 2.562c.1.173.162.322.521.442c.27.035.66.044.66.044m.242-3.444c-.846 0-1.35.946-1.824 1.539c-.61.907-1.236 1.921-2.028 1.893"></svg:path></svg:g>`,
})
export class HugeiconsSquareRootSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
