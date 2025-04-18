import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHoney01Icon],svg[hugeicons-honey-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M16.5 5h-9c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C6 4.199 6 3.966 6 3.5s0-.699.076-.883a1 1 0 0 1 .541-.54C6.801 2 7.034 2 7.5 2h9c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883s0 .699-.076.883a1 1 0 0 1-.541.54C17.199 5 16.966 5 16.5 5m-9 0l-.182.219c-1.147 1.376-1.72 2.064-2.02 2.89C5 8.932 5 9.828 5 11.62V16c0 2.828 0 4.243.879 5.121C6.757 22 8.172 22 11 22h2c2.828 0 4.243 0 5.121-.879C19 20.243 19 18.828 19 16v-4.38c0-1.791 0-2.687-.299-3.512c-.298-.825-.872-1.513-2.019-2.89L16.5 5"></svg:path><svg:path d="M10 13.294v-1.882L12 10l2 1.412v1.882m-4 0l2 1.412m-2-1.412l-2 1.412v1.882L10 18l2-1.412m2-3.294l-2 1.412m2-1.412l2 1.412v1.882L14 18l-2-1.412m0-1.882v1.882"></svg:path></svg:g>`,
})
export class HugeiconsHoney01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
