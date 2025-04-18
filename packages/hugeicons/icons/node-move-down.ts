import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsNodeMoveDownIcon],svg[hugeicons-node-move-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.499 7.992v4.496m0 0v1.498c0 2.826 0 4.239.878 5.116c.826.825 2.123.875 4.62.878M5.5 12.488h5.499M4 1.998h2.999c1.814 0 1.999 1.11 1.999 2.997c0 1.889-.185 2.997-2 2.997H4c-1.815 0-2-1.108-2-2.997s.185-2.997 2-2.997m6.998 10.49c0-.942 0-1.413.292-1.706c.293-.292.765-.292 1.707-.292s1.414 0 1.707.292c.292.293.292.764.292 1.706s0 1.413-.292 1.705c-.293.293-.764.293-1.707.293c-.942 0-1.414 0-1.707-.293c-.292-.292-.292-.763-.292-1.705m0 7.492c0-.941 0-1.412.292-1.705c.293-.293.765-.293 1.707-.293s1.414 0 1.707.293c.292.293.292.764.292 1.705s0 1.413-.292 1.706c-.293.293-.764.293-1.707.293c-.942 0-1.414 0-1.707-.293c-.292-.293-.292-.764-.292-1.706m6.99.086l1.402 1.567c.435.422.698.498 1.048.143L22 20.079m-1.993 1.907v-8.121c-.017-.54-.376-1.765-1.997-1.888" color="currentColor"></svg:path>`,
})
export class HugeiconsNodeMoveDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
