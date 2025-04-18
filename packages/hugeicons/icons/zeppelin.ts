import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsZeppelinIcon],svg[hugeicons-zeppelin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m19 15.997l-.306 1.323c-.329 1.418-.493 2.127-1 2.474c-.508.347-1.171.203-2.499-.084l-.766-.165c-.707-.153-1.06-.229-1.362-.427s-.527-.502-.977-1.11L11 16.537"></svg:path><svg:path d="M2 10.997c0 3 8 6 13 6c4 0 7-2.686 7-6s-3-6-7-6c-5 0-13 3-13 6m0 0h3"></svg:path><svg:path d="M7.5 5.997c-.755-.847-1.959-2.142-3.133-1.984c-.345.047-.686.238-1.367.62l1 3.364m3.5 8c-.755.847-1.959 2.142-3.133 1.984c-.345-.047-.686-.238-1.367-.62l1-3.364"></svg:path></svg:g>`,
})
export class HugeiconsZeppelinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
