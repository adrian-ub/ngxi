import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[antDesignVerticalLeftOutlinedIcon],svg[ant-design-vertical-left-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M762 164h-64c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V172c0-4.4-3.6-8-8-8m-508 0v72.4c0 9.5 4.2 18.4 11.4 24.5L564.6 512L265.4 763.1c-7.2 6.1-11.4 15-11.4 24.5V860c0 6.8 7.9 10.5 13.1 6.1L689 512L267.1 157.9A7.95 7.95 0 0 0 254 164"></svg:path>`,
})
export class AntDesignVerticalLeftOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
