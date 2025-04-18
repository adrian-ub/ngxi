import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[noniconsVue16Icon],svg[nonicons-vue-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.753 1h-1.336a.75.75 0 0 0-.631.344L8 4.122L6.214 1.344A.75.75 0 0 0 5.584 1H.75a.75.75 0 0 0-.647 1.13l7.25 12.352a.75.75 0 0 0 1.294 0l7.25-12.352A.75.75 0 0 0 15.25 1zM3.81 2.5L8 9.683L12.19 2.5h1.75L8 12.62L2.06 2.5z"></svg:path>`,
})
export class NoniconsVue16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
