import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBubbleTea02Icon],svg[hugeicons-bubble-tea-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m18 9l-1.478 9.414c-.25 1.585-.374 2.378-.936 2.85c-1.2 1.009-6.039.953-7.172 0c-.562-.472-.687-1.265-.936-2.85L6 9m0 0l.894-1.789c.538-1.076.807-1.614 1.29-1.912C8.669 5 9.27 5 10.473 5h3.056c1.203 0 1.804 0 2.287.299c.484.298.753.836 1.29 1.912L18 9M5 9h14m-7 0V2"></svg:path><svg:path d="M6.5 13.011c.275-.494 2.112-1.3 3.434-.905c1.653.494 5.087 3.378 7.566.905M10.008 17h-.01m4.01 2h-.01"></svg:path></svg:g>`,
})
export class HugeiconsBubbleTea02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
