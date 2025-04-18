import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCity01Icon],svg[hugeicons-city-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14 8h-4c-2.482 0-3 .518-3 3v11h10V11c0-2.482-.518-3-3-3m-3 4h2m-2 3h2m-2 3h2"></svg:path><svg:path d="M21 22V8.186c0-1.229 0-1.843-.299-2.336c-.298-.494-.836-.769-1.912-1.318l-4.342-2.217C13.287 1.723 13 1.932 13 3.23v4.474M3 22v-9c0-.827.173-1 1-1h3m15 10H2"></svg:path></svg:g>`,
})
export class HugeiconsCity01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
