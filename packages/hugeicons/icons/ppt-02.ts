import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPpt02Icon],svg[hugeicons-ppt-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14.786 22H10.5c-3.272 0-4.907 0-6.043-.798a4.1 4.1 0 0 1-.859-.805c-.85-1.066-.85-2.6-.85-5.67v-2.545c0-2.963 0-4.445.47-5.628C3.975 4.65 5.574 3.15 7.602 2.44C8.863 2 10.442 2 13.6 2c1.805 0 2.707 0 3.428.252c1.158.406 2.072 1.263 2.505 2.35c.268.676.268 1.523.268 3.216V10"></svg:path><svg:path d="M2.807 12A3.333 3.333 0 0 1 6.14 8.667c.666 0 1.45.116 2.098-.057a1.67 1.67 0 0 0 1.179-1.18c.173-.647.056-1.432.056-2.098A3.333 3.333 0 0 1 12.807 2M7.205 17.915V13.5a.5.5 0 0 1 .5-.5h1.228c.49 0 .987.217 1.16.666c.14.362.134.687 0 1.056c-.176.483-.7.736-1.223.736H7.707M17.739 13h1.755m0 0h1.756m-1.756 0v5m-6.771-.085V13.5a.5.5 0 0 1 .5-.5h1.062c.578 0 1.16.313 1.259.871c.04.228.04.449-.004.687c-.103.57-.69.9-1.28.9h-1.537"></svg:path></svg:g>`,
})
export class HugeiconsPpt02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
