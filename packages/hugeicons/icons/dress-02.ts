import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDress02Icon],svg[hugeicons-dress-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9.5 9c-1.455-.5-2.23-1.011-2-3c.13-1.12.5-2-.5-3l2.5-1c.167 1.167 1 2.5 2.5 3c1.5-.5 2.333-1.833 2.5-3L17 3c-1 1-.63 1.88-.5 3c.23 1.989-.545 2.5-2 3m-6 3h7c-.5-1-.5-2-.5-3H9c0 1 0 2-.5 3"></svg:path><svg:path d="M16.312 21.448c1.287.736 2.977.72 4.283-.016c.36-.207.547-.684.277-.971c-1.927-2.053-3.375-4.56-4.38-7.106c-.265-.673-.397-1.008-.652-1.182S15.243 12 14.56 12H9.442c-.685 0-1.027 0-1.282.173c-.255.174-.387.51-.652 1.181c-1.005 2.548-2.453 5.054-4.38 7.107c-.27.287-.082.764.277.97c1.306.736 2.996.753 4.283.017a2.69 2.69 0 0 1 2.611 0c.524.295 1.163.552 1.701.552s1.177-.257 1.7-.552a2.69 2.69 0 0 1 2.612 0"></svg:path></svg:g>`,
})
export class HugeiconsDress02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
