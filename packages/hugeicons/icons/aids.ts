import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAidsIcon],svg[hugeicons-aids-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 2c-2.073 0-5.118.567-5.71 2.892c-.524 2.057-.402 3.528.904 5.275l7.693 10.291c.774 1.036 1.162 1.553 1.686 1.542c.524-.012.887-.546 1.613-1.614l.529-.778c.907-1.335 1.361-2.003 1.274-2.725s-.686-1.268-1.885-2.36L6.8 4"></svg:path><svg:path d="M12 2c2.073 0 5.118.567 5.71 2.892c.524 2.057.402 3.528-.904 5.275L15.436 12M17.2 4L12 8.841m0 7.755l-2.888 3.862c-.774 1.036-1.16 1.553-1.685 1.542c-.524-.012-.887-.546-1.613-1.614l-.529-.778c-.907-1.335-1.361-2.003-1.275-2.725s.687-1.268 1.886-2.36L8.606 12"></svg:path></svg:g>`,
})
export class HugeiconsAidsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
