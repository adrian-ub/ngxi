import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineContactPhonebook2Icon],svg[streamline-contact-phonebook-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.422 13.424h-9.33a1.473 1.473 0 1 1 0-2.947h8.348a.98.98 0 0 0 .982-.982V1.638a.98.98 0 0 0-.982-.982H3.092A1.473 1.473 0 0 0 1.62 2.09v9.821m9.82-1.434v2.947"></svg:path><svg:path d="M7.524 8.236a1.7 1.7 0 0 0 1.957-.461l.246-.247a.533.533 0 0 0 .096-.732l-.796-.795a.533.533 0 0 0-.732.095a.533.533 0 0 1-.731.095L6.29 4.92a.533.533 0 0 1 .095-.732a.533.533 0 0 0 .096-.732l-.796-.796a.533.533 0 0 0-.732.096L4.708 3a1.71 1.71 0 0 0-.462 1.957a9.55 9.55 0 0 0 3.278 3.278Z"></svg:path></svg:g>`,
})
export class StreamlineContactPhonebook2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
