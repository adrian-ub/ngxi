import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCity2Icon],svg[tdesign-city-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 .698l4 3.334v6.833l5-4.167l7 5.834V22H2V4.032zM10 20h2v-6h6v6h2v-6.532l-5-4.166l-5 4.166zm6 0v-4h-2v4zm-8 0V4.968L6 3.302L4 4.968V20z"></svg:path>`,
})
export class TdesignCity2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
