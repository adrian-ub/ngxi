import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biBandaidIcon],svg[bi-bandaid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14.121 1.879a3 3 0 0 0-4.242 0L8.733 3.026l4.261 4.26l1.127-1.165a3 3 0 0 0 0-4.242M12.293 8L8.027 3.734L3.738 8.031L8 12.293zm-5.006 4.994L3.03 8.737L1.879 9.88a3 3 0 0 0 4.241 4.24l.006-.006l1.16-1.121ZM2.679 7.676l6.492-6.504a4 4 0 0 1 5.66 5.653l-1.477 1.529l-5.006 5.006l-1.523 1.472a4 4 0 0 1-5.653-5.66l.001-.002l1.505-1.492z"></svg:path><svg:path d="M5.56 7.646a.5.5 0 1 1-.706.708a.5.5 0 0 1 .707-.708Zm1.415-1.414a.5.5 0 1 1-.707.707a.5.5 0 0 1 .707-.707M8.39 4.818a.5.5 0 1 1-.708.707a.5.5 0 0 1 .707-.707Zm0 5.657a.5.5 0 1 1-.708.707a.5.5 0 0 1 .707-.707ZM9.803 9.06a.5.5 0 1 1-.707.708a.5.5 0 0 1 .707-.707Zm1.414-1.414a.5.5 0 1 1-.706.708a.5.5 0 0 1 .707-.708ZM6.975 9.06a.5.5 0 1 1-.707.708a.5.5 0 0 1 .707-.707ZM8.39 7.646a.5.5 0 1 1-.708.708a.5.5 0 0 1 .707-.708Zm1.413-1.414a.5.5 0 1 1-.707.707a.5.5 0 0 1 .707-.707"></svg:path></svg:g>`,
})
export class BiBandaidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
