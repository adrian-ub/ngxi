import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsArrowLeft05Icon],svg[hugeicons-arrow-left-05-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6v12m8.497-5.99v.371c.04 2.971-.095 4.004-1.345 3.524l-.308-.181l-.249-.173l-.535-.413l-1-.87l-1.023-.863l-.5-.453l-.223-.227l-.262-.379l-.054-.336l.054-.334l.262-.38l.223-.226l.5-.453l1.023-.864l1-.87l.535-.412l.249-.173l.308-.182c1.25-.479 1.385.553 1.345 3.524zm0 0H20" color="currentColor"></svg:path>`,
})
export class HugeiconsArrowLeft05Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
