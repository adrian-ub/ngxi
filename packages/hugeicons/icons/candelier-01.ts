import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCandelier01Icon],svg[hugeicons-candelier-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6.259 15.317C5.895 14.63 5.584 14 4.5 14s-1.395.63-1.759 1.317c-.338.638-1.126 1.65-.516 2.329c.317.354.97.354 2.275.354s1.958 0 2.275-.354c.61-.68-.178-1.69-.516-2.33m7.5 3.001C13.395 17.63 13.084 17 12 17c-1.085 0-1.395.63-1.759 1.317c-.338.638-1.126 1.65-.516 2.329c.317.354.97.354 2.275.354s1.958 0 2.275-.354c.61-.68-.178-1.69-.516-2.33m7.5-2.999C20.895 14.63 20.584 14 19.5 14s-1.395.63-1.759 1.317c-.338.638-1.126 1.65-.516 2.329c.317.354.97.354 2.275.354s1.958 0 2.275-.354c.61-.68-.178-1.69-.516-2.33M9 3h6m-3 0v14"></svg:path><svg:path d="M4.5 14v-2.25a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 1 1 7.5 0V14"></svg:path></svg:g>`,
})
export class HugeiconsCandelier01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
