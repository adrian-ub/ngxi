import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDatabasePerson20FilledIcon],svg[fluent-database-person-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5c0 1.657-2.686 3-6 3S4 6.657 4 5s2.686-3 6-3s6 1.343 6 3m-1.31 3.016a6 6 0 0 0 .81-.485c0 .811-.696 1.439-1.412 1.821a3 3 0 0 0-.815 4.658A2.5 2.5 0 0 0 11 16.5c0 .485.106.974.33 1.426Q10.687 18 10 18c-3.314 0-6-1.343-6-3V7.12c.383.362.84.661 1.31.896C6.562 8.642 8.222 9 10 9s3.438-.358 4.69-.984M17.5 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m1.5 4.5c0 1.245-1 2.5-3.5 2.5S12 17.75 12 16.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5"></svg:path>`,
})
export class FluentDatabasePerson20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
