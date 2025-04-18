import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsStamp02Icon],svg[hugeicons-stamp-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.991 15c0-.998-.083-3.365-1.833-6.73c-.776-1.493-.766-3.056-.477-4.286c.094-.402.332-.607.655-.829c.372-.256.559-.384.752-.492a5 5 0 0 1 2.013-.624a10.4 10.4 0 0 1 1.798 0a5 5 0 0 1 2.013.624c.193.108.38.236.752.492c.323.222.561.427.655.829c.289 1.23.3 2.793-.477 4.286c-1.75 3.365-1.833 5.732-1.833 6.73m-6.921 2.735c.44-1.32.66-1.98 1.184-2.357S9.492 15 10.883 15h2.234c1.391 0 2.087 0 2.61.377c.525.378.745 1.038 1.185 2.358L17 18H7zm-2.835 2.447c.213-.537.32-.806.47-1.027a2.65 2.65 0 0 1 1.68-1.1C6.675 18 6.98 18 7.586 18h8.828c.607 0 .91 0 1.183.055c.694.139 1.3.535 1.68 1.1c.15.221.257.49.47 1.027c.166.416.248.624.253.792c.012.436-.277.828-.712.971c-.169.055-.404.055-.874.055H5.586c-.47 0-.705 0-.874-.055c-.435-.143-.723-.535-.712-.97c.005-.169.087-.377.253-.793" color="currentColor"></svg:path>`,
})
export class HugeiconsStamp02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
