import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsThreeFinger05Icon],svg[hugeicons-three-finger-05-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.81 5.71a1.5 1.5 0 0 0-2.954-.522L9.074 9.62l-.927 5.078l-2.258-2.361a1.692 1.692 0 0 0-2.55 2.212l3.013 4.018c.684.912 1.026 1.367 1.437 1.722a5 5 0 0 0 2.19 1.095c.53.116 1.1.116 2.24.116H14.7a5 5 0 0 0 4.88-3.913l1.31-5.883l.088-.493a1.5 1.5 0 1 0-2.955-.52M12.81 5.709l.347-1.97a1.5 1.5 0 1 1 2.955.522l-.347 1.97m-2.955-.522l-.781 4.432m3.736-3.91l-.782 4.431m.781-4.432a1.5 1.5 0 1 1 2.955.521l-.695 3.94m0 0l-.087.492" color="currentColor"></svg:path>`,
})
export class HugeiconsThreeFinger05Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
