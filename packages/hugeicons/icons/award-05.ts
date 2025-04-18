import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAward05Icon],svg[hugeicons-award-05-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M4.5 9.5a7.5 7.5 0 1 0 15 0a7.5 7.5 0 0 0-15 0"></svg:path><svg:path d="M9 10.167s.75 0 1.5 1.333c0 0 2.382-3.333 4.5-4m1.883 7.5l.67 3.21c.43 2.062.646 3.093.203 3.582c-.442.489-1.21.069-2.746-.772l-2.274-1.245c-.363-.198-.544-.298-.736-.298s-.373.1-.736.298L8.99 21.02c-1.536.84-2.304 1.261-2.746.772s-.227-1.52.203-3.582l.67-3.21"></svg:path></svg:g>`,
})
export class HugeiconsAward05Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
