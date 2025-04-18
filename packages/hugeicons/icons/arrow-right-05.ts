import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsArrowRight05Icon],svg[hugeicons-arrow-right-05-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 6v12m-8.497-5.989v.37c-.04 2.972.094 4.004 1.345 3.525l.308-.182l.249-.173l.535-.413l1-.869l1.023-.864l.5-.453l.223-.226l.262-.38l.054-.336l-.054-.334l-.262-.379l-.223-.226l-.5-.453l-1.023-.864l-1-.87l-.535-.413l-.25-.172l-.307-.182c-1.25-.48-1.386.553-1.345 3.524zm0 0H4" color="currentColor"></svg:path>`,
})
export class HugeiconsArrowRight05Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
