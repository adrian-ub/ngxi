import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMouse13Icon],svg[hugeicons-mouse-13-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M5.185 18.994c4.295 2.437 7.09.118 9.184-3.448s2.74-7.103-1.554-9.54s-7.09-.118-9.184 3.448s-2.74 7.103 1.554 9.54"></svg:path><svg:path d="m12 8l.72-1.294c.903-1.628 1.355-2.441 2.123-2.655c.767-.214 1.55.256 3.116 1.196l2.076 1.245c.688.413 1.568.168 1.965-.547m-9.75 4.354c.233-.403.35-.605.375-.802a1 1 0 0 0-.198-.74c-.12-.158-.322-.274-.726-.507s-.605-.35-.803-.375a1 1 0 0 0-.739.198c-.158.12-.274.323-.507.726l-.5.866c-.233.404-.35.605-.375.803a1 1 0 0 0 .198.739c.12.158.322.274.726.507s.605.35.802.375a1 1 0 0 0 .74-.198c.157-.12.274-.322.507-.726z"></svg:path></svg:g>`,
})
export class HugeiconsMouse13Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
