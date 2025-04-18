import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMove01Icon],svg[hugeicons-move-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.84 22.249v-.95a3 3 0 0 0-.596-1.794l-3.662-4.91c-.422-.566-.76-1.269-.48-1.917c.45-1.05 1.724-1.732 3.283-.158l1.6 1.712V3.795c.055-2.046 3.347-2.147 3.488 0v5.948c1.482-.192 8.462.853 7.445 5.28l-.144.633c-.206.92-.814 2.56-1.485 3.519c-.699.997-.453 1.991-.453 3.074m1.089-19.632l.804-.757a.4.4 0 0 1 .273-.109m1.108.866l-.837-.762a.4.4 0 0 0-.271-.104m1.108 7.1l-.805.757a.4.4 0 0 1-.303.108m-1.077-.864l.837.76a.4.4 0 0 0 .24.104m0-7.965v7.965m3.133-5.075l.757.805a.4.4 0 0 1 .108.273m-.865 1.108l.761-.837A.4.4 0 0 0 22 5.719m-7.097 1.108l-.757-.805a.4.4 0 0 1-.107-.303m.864-1.078l-.761.837a.4.4 0 0 0-.103.24m7.961 0h-7.96" color="currentColor"></svg:path>`,
})
export class HugeiconsMove01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
