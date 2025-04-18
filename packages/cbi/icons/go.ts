import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiGoIcon],svg[cbi-go-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.869 21.012c-3.859-2.727-9.135-8.005-11.862-11.87C8.24 5.224 9.082 4.167 12.97 6.865c3.942 2.735 9.425 8.222 12.162 12.17c2.699 3.894 1.649 4.742-2.263 1.977M26.5 18.69c-2.781-4.548-8.645-10.415-13.185-13.195C11.162 4.177 9.67 3.736 8.97 4.15C5.984 6.574 4 10.623 4 14.771C4 18.893 5.885 22.574 8.838 25H8.5c-.825 0-1.5.675-1.5 1.5S7.675 28 8.5 28h7.871q.145 0 .281-.028c.19.008.376.028.567.028c4.09 0 8.208-2.035 10.632-4.955c.413-.703-.032-2.199-1.351-4.355"></svg:path>`,
})
export class CbiGoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
