import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsBookAdd2Icon],svg[proicons-book-add-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.5 18.749v-12.8c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874c.428-.218.988-.218 2.108-.218h8.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.427.218.987.218 2.108v4.301m-15 8.499c0 .467 0 .7.039.895a2 2 0 0 0 1.568 1.569c.195.039.429.039.896.039h3.247M4.5 18.749h4.75M8.96 9.25h6.08c.336 0 .504 0 .632-.065a.6.6 0 0 0 .263-.263C16 8.794 16 8.626 16 8.29V7.21c0-.336 0-.504-.065-.632a.6.6 0 0 0-.263-.263c-.128-.065-.296-.065-.632-.065H8.96c-.336 0-.504 0-.632.065a.6.6 0 0 0-.263.263C8 6.706 8 6.874 8 7.21v1.08c0 .336 0 .504.065.632a.6.6 0 0 0 .263.263c.128.065.296.065.632.065"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17.5 23a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11m0-8.993a.5.5 0 0 1 .5.5V17h2.493a.5.5 0 1 1 0 1H18v2.493a.5.5 0 1 1-1 0V18h-2.493a.5.5 0 1 1 0-1H17v-2.493a.5.5 0 0 1 .5-.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class ProiconsBookAdd2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
