import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMouse05Icon],svg[hugeicons-mouse-05-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.333 12.321c-.77 1.657-.174 3.79 1.472 5.009c.606.448 1.235.88 1.902 1.268c.667.387 1.355.717 2.044 1.02c1.875.822 4.011.274 5.055-1.224c.724-1.038 1.447-2.114 2.104-3.257s1.223-2.31 1.757-3.458c.77-1.657.174-3.79-1.473-5.009a20 20 0 0 0-1.901-1.268a20 20 0 0 0-2.044-1.02c-1.875-.822-4.011-.274-5.056 1.224C5.47 6.644 4.747 7.72 4.09 8.863s-1.223 2.31-1.757 3.458"></svg:path><svg:path d="m12 8l.72-1.294c.903-1.628 1.355-2.441 2.123-2.655c.767-.214 1.55.256 3.116 1.196l2.076 1.245c.688.413 1.568.168 1.965-.547m-9.75 4.354c.233-.403.35-.605.375-.802a1 1 0 0 0-.198-.74c-.12-.158-.322-.274-.726-.507s-.605-.35-.803-.375a1 1 0 0 0-.739.198c-.158.12-.274.323-.507.726l-.5.866c-.233.404-.35.605-.375.803a1 1 0 0 0 .198.739c.12.158.322.274.726.507s.605.35.802.375a1 1 0 0 0 .74-.198c.157-.12.274-.322.507-.726z"></svg:path></svg:g>`,
})
export class HugeiconsMouse05Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
