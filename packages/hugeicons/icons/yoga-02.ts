import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsYoga02Icon],svg[hugeicons-yoga-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7.886 10c.686 1.397 1.418 2.705 1.25 4.314c-.271 2.573-3.39 3.541-5.386 4.726c-1.307.777-.818 2.96.786 2.96c1.944 0 3.68-.155 5.435-.98l3.44-2.117c.478-.225 1.08-.129 1.589.097"></svg:path><svg:path d="M16.01 10c-.7 1.397-1.448 2.705-1.275 4.314c.276 2.573 3.462 3.541 5.499 4.726c1.334.777.835 2.96-.802 2.96c-1.986 0-3.759-.155-5.55-.98l-3.514-2.117c-.41-.189-.91-.151-1.368 0M10 4a2 2 0 1 0 4 0a2 2 0 0 0-4 0"></svg:path><svg:path d="M3 16c2.446 0 3.544-2.705 3.893-4.57c.092-.488.24-.973.563-1.349A5.99 5.99 0 0 1 12 8c1.816 0 3.444.807 4.544 2.081c.323.376.471.861.563 1.348C17.457 13.295 18.554 16 21 16"></svg:path></svg:g>`,
})
export class HugeiconsYoga02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
