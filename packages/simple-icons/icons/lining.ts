import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsLiningIcon],svg[simple-icons-lining-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.926 8.815c-.261-.004-.696.011-1.422.084c-1.937.194-2.398.828-2.398.828L0 15.177h1.017c4.279-4.664 8.291-6.278 8.291-6.278s.052-.075-.382-.084m2.332 1.571c-1.71-.008-3.181.092-3.803.366c-1.422.625-3.838 2.271-6.035 4.425c0 0 .864.115 1.902-.48c0 0 3.416-2.586 6.165-2.07s5.169 1.829 5.169 1.829s1.751 1 3.39.438S24 11.996 24 11.996s-3.266-.776-6.265-1.182c-1.687-.229-4.279-.418-6.477-.428"></svg:path>`,
})
export class SimpleIconsLiningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
