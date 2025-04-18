import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLeafMapleIcon],svg[mdi-leaf-maple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.79 13L16 16l1 2l-4-.75V21h-2v-3.75L7 18l1-2l-5.79-3l1-1.73L1.61 8l3.6-.23l1-1.77l3.42 3.9L8 5h2l2-3l2 3h2l-1.63 4.9L17.79 6l1 1.73l3.6.23l-1.6 3.23z"></svg:path>`,
})
export class MdiLeafMapleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
