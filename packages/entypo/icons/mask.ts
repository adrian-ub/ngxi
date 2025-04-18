import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoMaskIcon],svg[entypo-mask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.581 5.84a.8.8 0 0 0-.92-.73C16.919 5.388 12.835 7 10 7S3.081 5.388 1.339 5.11a.8.8 0 0 0-.92.729C.277 7.371 0 11.45 0 12.068c0 .83 3.472 2.732 6 2.732c2.452 0 2.95-2.732 4-2.732s1.548 2.732 4 2.732c2.528 0 6-1.902 6-2.732c0-.618-.277-4.697-.419-6.228M7.66 10.72c-.353.318-1.335 1.07-2.531.835S3.21 10.232 2.963 9.797a.26.26 0 0 1 .044-.317c.353-.318 1.335-1.07 2.532-.835c1.196.235 1.919 1.323 2.166 1.758a.26.26 0 0 1-.045.317m9.377-.923c-.246.436-.969 1.523-2.166 1.758c-1.196.235-2.179-.517-2.531-.835a.26.26 0 0 1-.045-.317c.246-.436.969-1.523 2.166-1.758c1.196-.235 2.179.517 2.531.835a.26.26 0 0 1 .045.317"></svg:path>`,
})
export class EntypoMaskIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
