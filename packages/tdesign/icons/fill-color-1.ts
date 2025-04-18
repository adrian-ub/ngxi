import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFillColor1Icon],svg[tdesign-fill-color-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 .052L23.948 12L22 13.948V14h-.052l-7.12 7.12a4 4 0 0 1-5.656 0L2.88 14.829a4 4 0 0 1 0-5.657l4.438-4.439L4.586 2L6 .586l2.733 2.733zM8.733 6.148l-4.438 4.438c-.39.39-.586.902-.586 1.414h17.41L12 2.88l-1.852 1.853L13.414 8L12 9.414zM4.88 14l5.706 5.706a2 2 0 0 0 2.828 0L19.12 14zm16.87 4.389l1.314 1.66c.581.734.581 1.848 0 2.581a1.68 1.68 0 0 1-1.314.657c-.53 0-1-.26-1.314-.657c-.581-.733-.581-1.847 0-2.581z"></svg:path>`,
})
export class TdesignFillColor1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
