import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLinkSquare01Icon],svg[hugeicons-link-square-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.1 3.002c-3.648.007-5.56.096-6.78 1.317C3.002 5.637 3.002 7.758 3.002 12s0 6.363 1.318 7.681s3.438 1.318 7.68 1.318s6.363 0 7.681-1.318c1.221-1.22 1.31-3.132 1.317-6.78m-.518-9.384l-5.548 5.534m5.549-5.534c-.494-.494-3.822-.448-4.525-.438m4.525.438c.494.495.448 3.826.438 4.53" color="currentColor"></svg:path>`,
})
export class HugeiconsLinkSquare01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
