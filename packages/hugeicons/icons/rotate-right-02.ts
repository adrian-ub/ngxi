import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRotateRight02Icon],svg[hugeicons-rotate-right-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m10.36 8.728l-.497 2.624l8.115-4.63a1.693 1.693 0 0 1 2.298.609a1.65 1.65 0 0 1-.616 2.27l-4.37 2.492l1.039 2.684c.686 1.723 1.029 2.585 1.017 3.337c-.02 1.241-.47 2.39-1.697 3.089c-.854.487-1.55.605-3.385.977c-1.165.235-1.748.353-2.288.311a3.87 3.87 0 0 1-2.369-1.052c-.39-.372-.687-.88-1.282-1.898l-.504-.863c-.79-1.353-1.185-2.03-1.286-2.775a4 4 0 0 1-.033-.403c-.02-.752.263-1.481.827-2.94l1.826-4.725A1.674 1.674 0 0 1 8.97 6.792a1.654 1.654 0 0 1 1.391 1.936m4.776-4.262c-.397.395-2.124.281-2.76.202m2.76-.202c.396-.396.408-2.328.328-2.963m-.328 2.963c-1.021-1.769-5.081-4.59-9.11-1.769C4.082 4.06 3.808 4.92 3.499 5.495" color="currentColor"></svg:path>`,
})
export class HugeiconsRotateRight02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
