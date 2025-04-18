import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMagisIcon],svg[arcticons-magis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.757 24.046l.49-4.454l1.968-.414l.535 4.927zm-3.772 7.81V17.59L6.09 28.16l-1.59-9.2"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m43.42 21.653l-24.497-8.36l-7.917 3.112l-1.628 16.07l1.383.614l.61-5.541l3.85.895l.758 6.963l2.685 1.193L43.5 29.315zM4.5 30.309V18.96"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m32.283 19.969l-8.579-2.429v15.1l8.579-2.088V25.3l-3.981-.054m10.825 3.641l2.396-.583l-.001-2.88l-2.395-.032v-3.486l2.396.679m-5.303-1.502v8.51m.321-18.19h2.545m-1.272 4.339v-4.34m5.686.001l-1.272 4.339l-1.272-4.34"></svg:path>`,
})
export class ArcticonsMagisIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
