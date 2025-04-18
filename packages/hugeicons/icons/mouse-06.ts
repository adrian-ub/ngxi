import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMouse06Icon],svg[hugeicons-mouse-06-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 6.167c-.403.797-1.294 1.07-1.992.61l-2.104-1.388c-1.588-1.047-2.381-1.57-3.16-1.332c-.474.145-.83.54-1.244 1.238M2.333 12.321c-.77 1.657-.174 3.79 1.472 5.009c.606.448 1.235.88 1.902 1.268c.667.387 1.355.717 2.044 1.02c1.875.822 4.011.274 5.055-1.224c.724-1.038 1.447-2.114 2.104-3.257s1.223-2.31 1.757-3.458c.77-1.657.174-3.79-1.473-5.009a20 20 0 0 0-1.901-1.268a20 20 0 0 0-2.044-1.02c-1.875-.822-4.011-.274-5.056 1.224C5.47 6.644 4.747 7.72 4.09 8.863s-1.223 2.31-1.757 3.458m9.3-4.419l-1 1.732" color="currentColor"></svg:path>`,
})
export class HugeiconsMouse06Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
