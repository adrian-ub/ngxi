import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPickaxeIcon],svg[mdi-pickaxe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.79 10.62L3.5 21.9l-1.4-1.4L13.38 9.21zm4.48-2.89l.59-.59l-.79-.79l.64-.64l-1.42-1.42l-.64.64l-.79-.79l-.59.59c-1.74-1.42-3.7-2.56-5.8-3.36l-.83 1.79c1.75.92 3.36 2.03 4.86 3.34L14 7l3 3l.5-.5c1.31 1.5 2.42 3.11 3.34 4.86l1.79-.83c-.8-2.1-1.94-4.06-3.36-5.8"></svg:path>`,
})
export class MdiPickaxeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
