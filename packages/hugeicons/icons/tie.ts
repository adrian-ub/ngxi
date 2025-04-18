import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTieIcon],svg[hugeicons-tie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.721 5.61c-.559-.99-.838-1.486-.674-1.936s.692-.638 1.748-1.012l.9-.319C11.341 2.114 11.665 2 12 2s.659.114 1.305.343l.9.32c1.056.373 1.584.56 1.748 1.01c.165.45-.115.946-.674 1.936l-.516.915c-.265.469-.397.703-.63.887c-.23.184-.445.245-.875.368c-.411.118-.88.221-1.258.221s-.847-.103-1.258-.221c-.43-.123-.644-.184-.876-.368s-.364-.418-.629-.887zM10.08 8l-1.66 7.144c-.36 1.55-.539 2.324-.333 3.052l.012.043c.216.725.782 1.278 1.912 2.385c.933.913 1.4 1.37 1.973 1.376h.032c.574-.007 1.04-.463 1.973-1.376c1.13-1.107 1.696-1.66 1.912-2.385l.012-.043c.206-.728.026-1.503-.334-3.052L13.921 8" color="currentColor"></svg:path>`,
})
export class HugeiconsTieIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
